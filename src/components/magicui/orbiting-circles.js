"use client";

import React from "react";

export function OrbitingCircles({
  className = "",
  children,
  reverse = false,
  duration = 20,
  delay = 0,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  pathClassName = "stroke-slate-200/80 stroke-1",
  ...props
}) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full h-full w-full"
        >
          <circle
            className={pathClassName}
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children);
        const angle = (360 / count) * index;
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              left: `calc(50% - ${iconSize / 2}px)`,
              top: `calc(50% - ${iconSize / 2}px)`,
              animationDirection: reverse ? "reverse" : "normal",
              ...(delay ? { animationDelay: `${delay}s` } : {}),
            }}
            className={`animate-orbit absolute flex transform-gpu items-center justify-center rounded-full ${className}`}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

export default OrbitingCircles;
