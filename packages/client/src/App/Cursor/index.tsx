import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { StyledCursor, Circle } from "./styles";

/**
 * Animated custom cursor.
 * @returns Cursor with animated circle.
 */
const Cursor: React.FC = () => {
  const location = useLocation();

  const cursor = useRef<HTMLDivElement>(null);
  const circle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { style: cursorStyle, classList } = cursor.current as HTMLDivElement;
    const { style: circleStyle } = circle.current as HTMLDivElement;

    const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
    const pos = { x: 0, y: 0 }; // cursor's coordinates
    const speed = 0.1; // between 0 and 1

    // Update current cursor position
    const updateCoordinates = (e: Event) => {
      const { clientX, clientY } = e as MouseEvent;

      mouse.x = clientX;
      mouse.y = clientY;
    };
    window.addEventListener("mousemove", updateCoordinates);

    // Return cursor direction angle for "squeeze" effect
    const getAngle = (diffX: number, diffY: number) => (Math.atan2(diffY, diffX) * 180) / Math.PI;

    // Return amount to squeeze on cursor
    const getSqueeze = (diffX: number, diffY: number) => {
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);
      const maxSqueeze = 0.15;
      const accelerator = 1500;
      return Math.min(distance / accelerator, maxSqueeze);
    };

    // Update cursor scale, rotate and translate properties for animation
    const updateCursor = () => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);

      pos.x += diffX * speed;
      pos.y += diffY * speed;

      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);

      const scale = `scale(${1 + squeeze}, ${1 - squeeze})`;
      const rotate = `rotate(${angle}deg)`;
      const translate = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

      cursorStyle.transform = translate;
      circleStyle.transform = rotate + scale;
    };

    // Recursive function for updating cursor properties with animation
    let animationFrameId: number;
    const loop = () => {
      updateCursor();
      animationFrameId = requestAnimationFrame(loop);
    };
    animationFrameId = requestAnimationFrame(loop);

    // Cursor modifiers to update cursor with custom classes
    const cursorModifiers = document.querySelectorAll("[data-cursor]");

    cursorModifiers.forEach((cursorModifier) => {
      cursorModifier.addEventListener("mouseenter", () => {
        const className = cursorModifier.getAttribute("data-cursor") as string;
        classList.add(className);
      });

      cursorModifier.addEventListener("mouseleave", () => {
        const className = cursorModifier.getAttribute("data-cursor") as string;
        classList.remove(className);
      });
    });

    return () => {
      window.removeEventListener("mousemove", updateCoordinates);
      cancelAnimationFrame(animationFrameId);
    };
  });

  React.useEffect(() => {
    (cursor.current as HTMLDivElement).classList.remove("arrow-top");
    (cursor.current as HTMLDivElement).classList.remove("arrow");
    (cursor.current as HTMLDivElement).classList.remove("arrow-bottom");
    (cursor.current as HTMLDivElement).classList.remove("arrow-left");
  }, [location]);

  return (
    <StyledCursor ref={cursor}>
      <Circle ref={circle} id="cursorCircle" />
    </StyledCursor>
  );
};

export default Cursor;
