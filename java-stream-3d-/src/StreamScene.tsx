import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import * as THREE from '../node_modules/@types/three';

export type SceneToken = {
  id: number;
  label: string;
  status: 'waiting' | 'pass' | 'reject' | 'changed';
  progress: number;
};

type Props = {
  operation: string;
  tokens: SceneToken[];
  playing: boolean;
  onSelectToken?: (id: number) => void;
};

const statusColors = {
  waiting: '#69a0ff',
  pass: '#42e4b0',
  reject: '#ff718b',
  changed: '#bd91ff',
};

const stageNames = ['SOURCE', 'OPERATION', 'TERMINAL', 'RESULT'];
const stageDescriptions = [
  'Input collection',
  'Process each value',
  'Execute the stream',
  'Final output',
];

export default function StreamScene({
  operation,
  tokens,
  playing,
  onSelectToken,
}: Props) {
  const host = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);

  // Subtle real Three.js scene in the background. The important labels are DOM
  // elements above the canvas, so they remain sharp and readable at any zoom.
  useEffect(() => {
    const el = host.current;
    if (!el) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#080f1d');
    scene.fog = new THREE.Fog('#080f1d', 18, 48);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 5.5, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '0';
    el.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0x9abaff, 0x111a2c, 1.8));

    const keyLight = new THREE.PointLight(0x367dff, 45, 30);
    keyLight.position.set(-4, 7, 5);
    scene.add(keyLight);

    const accentLight = new THREE.PointLight(0x8a4cff, 38, 24);
    accentLight.position.set(5, 2, -2);
    scene.add(accentLight);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(60, 45),
      new THREE.MeshStandardMaterial({
        color: 0x0a1426,
        metalness: 0.35,
        roughness: 0.58,
      }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.6;
    scene.add(floor);

    const grid = new THREE.GridHelper(48, 40, 0x244b7c, 0x172c49);
    grid.position.y = -2.57;
    scene.add(grid);

    // Floating luminous points provide depth without competing with the UI.
    const starPositions: number[] = [];
    for (let i = 0; i < 240; i += 1) {
      starPositions.push(
        (Math.random() - 0.5) * 32,
        Math.random() * 11 - 0.2,
        (Math.random() - 0.5) * 18 - 4,
      );
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starPositions, 3),
    );
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        color: 0x86a9e0,
        size: 0.035,
        transparent: true,
        opacity: 0.6,
      }),
    );
    scene.add(stars);

    let frame = 0;
    let raf = 0;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let rotationY = 0;
    let rotationX = 0;
    let zoomFactor = 1;

    const resize = () => {
      const width = el.clientWidth || 900;
      const height = el.clientHeight || 480;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(el);
    resize();

    const onPointerDown = (event: PointerEvent) => {
      // Rotate the background only when dragging the canvas margins.
      if ((event.target as HTMLElement).closest('[data-pipeline-ui="true"]')) return;
      dragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      rotationY += (event.clientX - lastX) * 0.004;
      rotationX += (event.clientY - lastY) * 0.002;
      rotationX = Math.max(-0.22, Math.min(0.28, rotationX));
      lastX = event.clientX;
      lastY = event.clientY;
    };
    const onPointerUp = () => {
      dragging = false;
    };
    const onWheel = (event: WheelEvent) => {
      if ((event.target as HTMLElement).closest('[data-pipeline-ui="true"]')) return;
      event.preventDefault();
      zoomFactor = Math.max(0.8, Math.min(1.35, zoomFactor + (event.deltaY > 0 ? -0.04 : 0.04)));
      camera.position.set(0, 5.5 / zoomFactor, 20 / zoomFactor);
      camera.lookAt(0, 0, 0);
    };

    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    el.addEventListener('wheel', onWheel, { passive: false });

    const animate = () => {
      raf = requestAnimationFrame(animate);
      frame += 0.008;
      stars.rotation.y = rotationY + Math.sin(frame * 0.5) * (playing ? 0.025 : 0.008);
      stars.rotation.x = rotationX;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('wheel', onWheel);
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) material.forEach((item) => item.dispose());
          else material.dispose();
        }
      });
      if (renderer.domElement.parentElement === el) el.removeChild(renderer.domElement);
    };
  }, [playing]);

  const safeZoom = Math.max(0.8, Math.min(1.25, zoom));
  const currentOperation = operation.replace(/\(\)$/, '').toUpperCase();

  return (
    <div className="scene-wrap" style={{ overflow: 'hidden', background: '#080f1d' }}>
      <div
        ref={host}
        className="three-host"
        style={{
          position: 'relative',
          height: 'min(540px, 62vw)',
          minHeight: 410,
          overflow: 'hidden',
          touchAction: 'pan-y',
          background: 'radial-gradient(ellipse at 50% 40%, #132647 0%, #080f1d 72%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            background: 'linear-gradient(180deg, rgba(7,14,27,.15), rgba(7,14,27,.06) 50%, rgba(7,14,27,.4))',
          }}
        />

        <div
          data-pipeline-ui="true"
          style={{
            position: 'absolute',
            zIndex: 2,
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '42px clamp(12px, 3vw, 38px) 24px',
            transform: `scale(${safeZoom})`,
            transformOrigin: 'center center',
            transition: 'transform 180ms ease',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              alignItems: 'center',
              gap: 0,
              width: '100%',
              position: 'relative',
            }}
          >
            {stageNames.map((stage, index) => {
              const isActive = index === 1;
              const isResult = index === 3;
              const label = index === 1 ? currentOperation : stage;
              return (
                <div
                  key={stage}
                  style={{
                    position: 'relative',
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      maxWidth: 220,
                      minHeight: 126,
                      boxSizing: 'border-box',
                      borderRadius: 16,
                      padding: '17px 8px 14px',
                      background: isActive
                        ? 'linear-gradient(150deg, rgba(32,82,171,.97), rgba(13,31,64,.98))'
                        : isResult
                          ? 'linear-gradient(150deg, rgba(14,65,67,.97), rgba(10,29,40,.98))'
                          : 'linear-gradient(150deg, rgba(20,37,62,.98), rgba(9,20,37,.98))',
                      border: `1px solid ${isActive ? '#78aaff' : isResult ? '#43dcb4' : '#466387'}`,
                      boxShadow: isActive
                        ? '0 0 0 1px rgba(86,145,255,.16), 0 12px 34px rgba(28,91,220,.28)'
                        : isResult
                          ? '0 12px 30px rgba(23,194,155,.12)'
                          : '0 12px 28px rgba(0,0,0,.24)',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        font: '10px ui-monospace, SFMono-Regular, Menlo, monospace',
                        color: isActive ? '#b9d4ff' : '#7e9bc3',
                        letterSpacing: '1.6px',
                        marginBottom: 13,
                      }}
                    >
                      STEP 0{index + 1}
                    </div>
                    <div
                      title={label}
                      style={{
                        color: '#f3f7ff',
                        fontSize: 'clamp(11px, 1.15vw, 16px)',
                        lineHeight: 1.25,
                        fontWeight: 800,
                        letterSpacing: '.25px',
                        overflowWrap: 'anywhere',
                        textShadow: isActive ? '0 0 18px rgba(120,170,255,.45)' : 'none',
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        color: '#a4b8d6',
                        fontSize: 'clamp(9px, .85vw, 11px)',
                        lineHeight: 1.4,
                        marginTop: 8,
                      }}
                    >
                      {stageDescriptions[index]}
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        left: 12,
                        right: 12,
                        bottom: 0,
                        height: 3,
                        borderRadius: 3,
                        background: isActive ? '#70a5ff' : isResult ? '#42e4b0' : '#29466c',
                      }}
                    />
                  </div>

                  {index < 3 && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 62,
                        left: 'calc(50% + 50px)',
                        width: 'calc(100% - 100px)',
                        height: 2,
                        background: 'linear-gradient(90deg, #527fb7, #8bb8ff)',
                        boxShadow: '0 0 10px rgba(105,160,255,.45)',
                        zIndex: -1,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 8,
              marginTop: 26,
              color: '#91a9ce',
              font: '10px ui-monospace, SFMono-Regular, Menlo, monospace',
              letterSpacing: '.7px',
            }}
          >
            <span>DATA FLOW</span>
            <span>{tokens.length} ELEMENT{tokens.length === 1 ? '' : 'S'}</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 18,
            }}
          >
            {tokens.map((token) => {
              const color = statusColors[token.status];
              return (
                <div
                  key={token.id}
                  title={`${token.label} · ${token.status}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 9,
                    maxWidth: '100%',
                    padding: '9px 13px 9px 9px',
                    borderRadius: 999,
                    background: 'rgba(8,17,32,.96)',
                    border: `1px solid ${color}`,
                    boxShadow: `0 0 18px ${color}22`,
                    color: '#f4f7ff',
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    overflowWrap: 'anywhere',
                    pointerEvents: onSelectToken ? 'auto' : 'none',
                    cursor: onSelectToken ? 'pointer' : 'default',
                  }}
                  onClick={() => onSelectToken?.(token.id)}
                >
                  <span
                    style={{
                      width: 19,
                      height: 19,
                      borderRadius: '50%',
                      flex: '0 0 auto',
                      background: `radial-gradient(circle at 35% 30%, #ffffff, ${color} 45%, ${color}88)`,
                      boxShadow: `0 0 12px ${color}88`,
                    }}
                  />
                  <span>{token.label}</span>
                  <span
                    style={{
                      color,
                      font: '9px ui-monospace, SFMono-Regular, Menlo, monospace',
                      textTransform: 'uppercase',
                    }}
                  >
                    {token.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            zIndex: 3,
            top: 12,
            left: 14,
            color: '#8da8d2',
            font: '9px ui-monospace, SFMono-Regular, Menlo, monospace',
            letterSpacing: '1px',
            pointerEvents: 'none',
          }}
        >
          3D DATA JOURNEY · SCENE DEPTH ACTIVE
        </div>

        <div
          data-pipeline-ui="true"
          style={{
            position: 'absolute',
            zIndex: 3,
            right: 12,
            bottom: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 7,
          }}
        >
          <button
            type="button"
            onClick={() => setZoom((value) => Math.max(0.8, +(value - 0.1).toFixed(2)))}
            aria-label="Zoom out"
            style={zoomButtonStyle}
          >
            −
          </button>
          <span style={{ color: '#9ab0d1', fontSize: 10, minWidth: 38, textAlign: 'center' }}>
            {Math.round(safeZoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoom((value) => Math.min(1.25, +(value + 0.1).toFixed(2)))}
            aria-label="Zoom in"
            style={zoomButtonStyle}
          >
            +
          </button>
          <button type="button" onClick={() => setZoom(1)} style={zoomButtonStyle}>
            Reset
          </button>
        </div>
      </div>

      <div
        className="scene-legend"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 16,
          padding: '12px 15px',
          borderTop: '1px solid #20314b',
          background: '#0b1424',
        }}
      >
        {(
          [
            ['waiting', 'Waiting'],
            ['pass', 'Passed'],
            ['reject', 'Rejected'],
            ['changed', 'Transformed'],
          ] as const
        ).map(([status, label]) => (
          <span
            key={status}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              color: '#a0b3d0',
              font: '10px ui-monospace, SFMono-Regular, Menlo, monospace',
            }}
          >
            <i
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                display: 'inline-block',
                background: statusColors[status],
              }}
            />
            {label}
          </span>
        ))}
        <span style={{ marginLeft: 'auto', color: '#718cb4', fontSize: 10 }}>
          React UI + Three.js depth scene
        </span>
      </div>
    </div>
  );
}

const zoomButtonStyle: CSSProperties = {
  minWidth: 29,
  height: 28,
  borderRadius: 6,
  border: '1px solid #36547c',
  background: '#12213a',
  color: '#e6efff',
  fontSize: 12,
  cursor: 'pointer',
};
