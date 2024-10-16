import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Button } from "./ui/button";

const CompleteButton = () => {
  const [Btn, setBtn] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => window.removeEventListener("resize", detectSize);
  }, []);

  return (
    <>
      <Button className="w-full bg-bhgreen" onClick={() => setBtn(!Btn)}>
        Get Points
      </Button>
      {Btn && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          tweenDuration={1000}
        />
      )}
    </>
  );
};

export default CompleteButton;
