"use client";
import React, { useRef, useEffect, ReactNode } from "react";
import VanillaTilt from "vanilla-tilt";

export interface TiltOptions {
  max?: number;
  speed?: number;
  glare?: boolean;
  "max-glare"?: number;
  scale?: number;
}

interface TiltProps {
  /** Tilt.js options (will merge with defaults) */
  options?: TiltOptions;
  /** Additional classes for the wrapper div */
  className?: string;
  /** Content to tilt (e.g., an <img />) */
  children: ReactNode;
}

const DEFAULT_OPTIONS: TiltOptions = {
  max: 15,
  speed: 400,
  glare: false,
  "max-glare": 0,
  scale: 1,
};

const Tilt: React.FC<TiltProps> = ({
  options = {},
  className = "",
  children,
}) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const settings = { ...DEFAULT_OPTIONS, ...options };
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, settings);
    }

    return () => {
      if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Tilt;
