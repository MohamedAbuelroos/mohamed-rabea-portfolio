"use client";

import { useEffect, useState } from "react";
import Logo from "../layout/logo";

interface IntroLoaderProps {
  onFinish: () => void;
}

const text1 = "Welcome to Mohamed Rabea’s World";
const text2 = "Turning ideas into immersive digital journeys";

const loadingTexts = [
  "Building Projects...",
  "Loading Experience...",
  "Preparing  Creativity...",
  "Optimizing Performance...",
  "Launching  Portfolio...",
];

export default function IntroLoader({ onFinish }: IntroLoaderProps) {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [fade, setFade] = useState(false);
  const [loadingText, setLoadingText] = useState(loadingTexts[0]);

  useEffect(() => {
    let i = 0;

    const first = setInterval(() => {
      setLine1(text1.slice(0, i + 1));
      i++;

      if (i > text1.length) {
        clearInterval(first);

        let j = 0;

        const second = setInterval(() => {
          setLine2(text2.slice(0, j + 1));
          j++;

          if (j > text2.length) {
            clearInterval(second);

            setTimeout(() => {
              setFade(true);

              setTimeout(() => {
                onFinish();
              }, 700);
            }, 800);
          }
        }, 35);
      }
    }, 35);

    return () => clearInterval(first);
  }, [onFinish]);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current = (current + 1) % loadingTexts.length;

      setLoadingText(loadingTexts[current]);
    }, 900);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        bg-background
        transition-opacity duration-700
        ${fade ? "opacity-0" : "opacity-100"}
      `}
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
      </div>

      {/* Logo */}
      <div className="mb-10 animate-loader-float">
        <Logo />
      </div>

      {/* Loading ring */}
      <div className="relative mb-10">
        <div className="h-16 w-16 rounded-full border-2 border-border" />

        <div
          className="
            absolute inset-0
            h-16 w-16
            rounded-full
            border-2
            border-transparent
            border-t-violet-500
            border-r-cyan-400
            animate-spin
          "
        />
      </div>
      {/* Loading Status */}
      <div className="mb-8 h-6">
        <p
          key={loadingText}
          className="
      animate-fade-in
      text-sm
      font-medium
      tracking-wide
      text-muted-foreground
    "
        >
          {loadingText}
        </p>
      </div>

      {/* Title */}
      <h1 className="text-center text-2xl font-bold md:text-4xl">
        {line1}
        {!line2 && <span className="animate-pulse text-violet-500">|</span>}
      </h1>

      {/* Subtitle */}
      <p className="mt-5 text-center text-muted-foreground">
        {line2}

        {line2 && <span className="animate-pulse text-violet-500">|</span>}
      </p>
    </div>
  );
}
