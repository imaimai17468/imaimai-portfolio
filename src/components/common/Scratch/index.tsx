import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import type { ScratchProps } from "./type";

export const Scratch: React.FC<ScratchProps> = ({
	togglePlay,
	className,
	style,
}) => {
	const [isScratched, setIsScratched] = useState(false);

	const handleScratch = () => {
		setIsScratched(!isScratched);
		if (togglePlay) togglePlay();
	};

	return (
		<div
			className={`relative flex items-center justify-center ${className || ""}`}
			style={style}
		>
			<motion.div
				animate={isScratched ? "rotate" : "initial"}
				variants={{
					rotate: {
						rotate: 360,
						transition: {
							duration: 3,
							repeat: Number.POSITIVE_INFINITY,
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
					className="cursor-pointer rounded-full border-4 border-slate-400 transition"
					onClick={handleScratch}
				/>
			</motion.div>
			<Image
				src={isScratched ? "/images/start.png" : "/images/pause.png"}
				alt="start"
				width={75}
				height={75}
				onClick={handleScratch}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer opacity-80"
			/>
		</div>
	);
};
