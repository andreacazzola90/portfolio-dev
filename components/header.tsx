import React, { use, useEffect, useRef, useState } from "react";
import Magentic from "./ui/magentic";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Logo from "@/public/svg/Logo.svg";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { toggleMenu } from "@/redux/states/menuSlice";
import { cn } from "@/lib/utils";
import { links } from "@/data/data";
import "@/app/header.css";

const ease = CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 ");

type HeaderProps = {
  color: "Dark" | "Light";
  className?: string;
  mode?: "hamburger" | "cross";
};

export function Header({ color, className, mode = "hamburger" }: HeaderProps) {
  const possibleTailwindClasses = [
    "bg-colorDark",
    "bg-colorLight",
    "text-colorDark",
    "text-colorLight",
    "before:bg-colorDark",
    "before:bg-colorLight",
  ];

  const logoAnimationTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    logoAnimationTl.current = gsap.timeline({ paused: true }).fromTo(
      `.logo__rotate`,
      {
        rotate: 0,
        transformOrigin: "center",
      },
      {
        rotate: -360,
        transformOrigin: "center",
        duration: 0.6,
        ease: ease,
      },
    );

    return () => {
      logoAnimationTl.current?.kill();
    };
  }, []);

  const dispatch = useAppDispatch();
  return (
    <header className={cn("nav__container anime px-paddingX", className)}>
      <nav className="nav__bar ">
        <div className="max-w-maxWidth">
          <Magentic
            href={links.home}
            strength={50}
            className={`nav__item text-xl font-bold text-color${color} before:bg-color${color}`}
            onMouseEnter={() => {
              console.log("hello");
              logoAnimationTl.current?.play();
            }}
            onMouseLeave={() => {
              logoAnimationTl.current?.reverse();
            }}
          >
            <p className="mask logo__anim flex items-center justify-center font-semibold   ">
              <svg
                className="w-[72px]"
                viewBox="0 0 200 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="logo__rotate" fill="currentColor">
                  <path d="M174.464 25.6454L146.926 74.3546H174.464V25.6454Z" fill="currentColor"/>
                  <path d="M174.464 74.3546L125.755 46.8158L125.755 74.3546L174.464 74.3546Z" fill="currentColor"/>
                  <path d="M174.464 25.6454L125.755 53.1842L125.755 25.6454L174.464 25.6454Z" fill="currentColor"/>
                </g>
                <circle cx="150.11" cy="50" r="49" stroke="currentColor" strokeWidth="2"/>
                <path d="M27.6 25.6454L0.0612493 74.3546H27.6V25.6454Z" fill="currentColor"/>
                <path d="M93.2474 74.3546L44.5383 46.8158L44.5382 74.3546L93.2474 74.3546Z" fill="currentColor"/>
                <path d="M93.2474 25.6454L44.5383 53.1842L44.5382 25.6454L93.2474 25.6454Z" fill="currentColor" />
              </svg>
            </p>
          </Magentic>
          <Magentic
            strength={50}
            className={`mask nav__item h-8 w-8 cursor-pointer items-center text-color${color} before:bg-color${color}`}
            onClick={() => {
              if (mode === "cross") {
                dispatch(toggleMenu({ isMenuOpen: false }));
              } else {
                dispatch(toggleMenu({ isMenuOpen: true, color: color }));
              }
            }}
          >
            <div
              className={cn(
                "flex h-[0.9rem] w-full flex-col justify-between ",
                {
                  "scale-[.90] justify-center": mode === "cross",
                },
              )}
            >
              <div
                className={cn(`h-[0.15rem] w-full bg-color${color}`, {
                  "absolute rotate-45": mode === "cross",
                })}
              ></div>
              <div
                className={cn(`h-[0.15rem] w-full bg-color${color}`, {
                  "absolute -rotate-45": mode === "cross",
                })}
              ></div>
            </div>
          </Magentic>
        </div>
      </nav>
    </header>
  );
}
