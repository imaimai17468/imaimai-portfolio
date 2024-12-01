import { motion } from "framer-motion";

import { childMotion, containerMotion } from "@/utils/motions";

import type { CharAnimationProps } from "./types";

export const CharAnimation: React.FC<CharAnimationProps> = ({
	char,
	className = "",
}: CharAnimationProps) => (
	<motion.div
		className={`flex ${className}`}
		variants={containerMotion}
		initial="hidden"
		whileInView="visible"
	>
		{Array.from(char).map((char) => (
			<motion.h3 key={char} variants={childMotion}>
				{char}
			</motion.h3>
		))}
	</motion.div>
);
