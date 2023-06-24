import React, { useContext, useEffect, useRef } from "react";
import "./style.scss";
import CustomCursorContext from "./context/CustomCursorContext";

interface PositionRef {
  mouseX: number;
  mouseY: number;
  destinationX: number;
  destinationY: number;
  distanceX: number;
  distanceY: number;
  key: number;
}

const CustomCursor: React.FC = () => {
  const { type } = useContext(CustomCursorContext);
  const secondaryCursor = useRef<HTMLDivElement | null>(null);
  const mainCursor = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef<PositionRef>({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;

      if (secondaryCursor.current) {
        positionRef.current.mouseX =
          mouseX - secondaryCursor.current.clientWidth / 2;
        positionRef.current.mouseY =
          mouseY - secondaryCursor.current.clientHeight / 2;
      }

      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${
          mouseX - mainCursor.current.clientWidth / 2
        }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.0099;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.0099;

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };

    followMouse();

    return () => {
      cancelAnimationFrame(positionRef.current.key);
    };
  }, []);

  return (
    <div className={`cursor-wrapper ${type}`}>
      <div className="main-cursor" ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background"></div>
      </div>
    </div>
  );
};

export default CustomCursor;