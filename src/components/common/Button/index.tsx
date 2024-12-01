import { motion } from "framer-motion";

import s from "./index.module.css";
import type { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
	children,
	className = "",
	onClick,
	onMouseEnter,
	onMouseLeave,
	disabled,
}: ButtonProps) => (
	<motion.button
		className={`rounded-full bg-gradient-to-r px-4 py-2 font-bold text-gray-100 disabled:opacity-50 ${s.shine} ${className}`}
		onClick={() => {
			if (onClick) onClick();
		}}
		whileHover={{ scale: 1.1 }}
		whileTap={{ scale: 0.9 }}
		transition={{ type: "spring", stiffness: 100, damping: 10 }}
		onMouseEnter={() => {
			if (onMouseEnter) onMouseEnter();
		}}
		onMouseLeave={() => {
			if (onMouseLeave) onMouseLeave();
		}}
		disabled={disabled}
	>
		{children}
	</motion.button>
);
