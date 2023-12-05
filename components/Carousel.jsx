import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <div className="h-[calc(100vh_-_88px)]">
      <div className="relative h-full w-full">
        <Image src="/images/hero-bg.jpg" alt="" layout="fill" objectFit="cover"/>
      </div>
    </div>
  );
};

export default Carousel;
