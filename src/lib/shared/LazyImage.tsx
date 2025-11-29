/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyImage({
  src,
  alt,
  className = "",
  width,
  height,
  fill,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loadedSrc, setLoadedSrc] = useState("");

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadedSrc(src);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={loadedSrc || undefined}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={`${className} ${
        fill ? "absolute inset-0 w-full h-full object-cover" : ""
      }`}
      {...props}
    />
  );
}
