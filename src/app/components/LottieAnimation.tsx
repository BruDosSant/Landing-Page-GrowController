"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function LottieAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/Growing Plant.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  if (!animationData) {
    return <div className="w-full max-w-md mx-auto h-64" />;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Lottie animationData={animationData} loop={false} />
    </div>
  );
}

