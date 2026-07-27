import React, { useEffect, useRef, useState } from 'react';

interface Metric {
  label: string;
  value: number;
  color: string;
  glow: string;
}

const metrics: Metric[] = [
  { label: 'Energy', value: 78, color: '#10b981', glow: 'rgba(16, 185, 129, 0.4)' },
  { label: 'Focus', value: 92, color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.4)' },
  { label: 'Curiosity', value: 100, color: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.4)' },
];

export const SystemStatus: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) observer.unobserve(containerRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: '#0f1524',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        padding: '1.25rem',
        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        width: '100%',
        maxWidth: '300px',
        color: '#e2e8f0',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Sprout Icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ shapeRendering: 'crispEdges' }}>
            <path d="M11 12h2v7h-2z" fill="#10b981" />
            <path d="M6 9h5v4H6z" fill="#34d399" />
            <path d="M13 10h5v4h-5z" fill="#10b981" />
          </svg>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#e2e8f0' }}>System Status</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981',
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.825rem',
                color: '#8092ab',
                marginBottom: '0.35rem',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span>{metric.label}</span>
              <span style={{ color: '#e2e8f0' }}>{metric.value}%</span>
            </div>
            <div
              style={{
                height: '6px',
                backgroundColor: '#151c2e',
                borderRadius: '3px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: isVisible ? `${metric.value}%` : '0%',
                  backgroundColor: metric.color,
                  boxShadow: `0 0 10px ${metric.glow}`,
                  borderRadius: '3px',
                  transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '1rem',
          fontSize: '0.8rem',
          color: '#8092ab',
          lineHeight: '1.4',
        }}
      >
        <p style={{ fontStyle: 'italic', marginBottom: '0.4rem' }}>
          "The best way to predict the future is to build systems that adapt."
        </p>
        <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', textAlign: 'right' }}>
          — Me, probably
        </span>
      </div>
    </div>
  );
};
