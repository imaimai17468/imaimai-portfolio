import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ScratchProps } from "./Scratch.type";

const Scratch = ({ togglePlay, className, style }: ScratchProps) => {
  const [isScratched, setIsScratched] = useState(false);
  

  const handleScratch = () => {
    setIsScratched(!isScratched);
    togglePlay && togglePlay();
  };

  return (
    <div
      className={`flex justify-center items-center relative ${className}`}
      style={style}
    >
      <motion.div
        animate={isScratched ? "rotate" : "initial"}
        variants={{
          rotate: {
            rotate: 360,
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
          },
        }}
      >
        <Image
          src="/images/frog_circle.png"
          alt="imaimai"
          width={200}
          height={200}
          className="border-4 border-slate-400 rounded-full transition cursor-pointer"
          onClick={handleScratch}
        />
      </motion.div>
      <Image
        src={isScratched ? "/images/start.png" : "/images/pause.png"}
        alt="start"
        width={75}
        height={75}
        onClick={handleScratch}
        className="opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      />
    </div>
  );
};

export default Scratch;
