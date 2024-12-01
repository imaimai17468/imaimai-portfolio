"use client";

import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";
import type React from "react";
import { useState } from "react";

type AnimatedTooltipProps = {
	name: string;
	children: React.ReactNode;
};

export const AnimatedTooltip = ({ name, children }: AnimatedTooltipProps) => {
	const [hovered, setHovered] = useState<boolean>(false);
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useMotionValue(0);
	const rotate = useSpring(
		useTransform(x, [-100, 100], [-45, 45]),
		springConfig,
	);
	const translateX = useSpring(
		useTransform(x, [-100, 100], [-50, 50]),
		springConfig,
	);
	const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
		const halfWidth = 16;
		x.set(event.nativeEvent.offsetX - halfWidth);
	};

	return (
		<div
			className="group  relative -mr-4"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<AnimatePresence mode="wait">
				{hovered && (
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.6 }}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1,
							transition: {
								type: "spring",
								stiffness: 260,
								damping: 10,
							},
						}}
						exit={{ opacity: 0, y: 20, scale: 0.6 }}
						style={{
							translateX,
							rotate,
							whiteSpace: "nowrap",
						}}
						className="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
					>
						<div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent " />
						<div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent " />
						<div className="relative z-30 text-base font-bold text-white">
							{name}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<div onMouseMove={handleMouseMove}>{children}</div>
		</div>
	);
};
