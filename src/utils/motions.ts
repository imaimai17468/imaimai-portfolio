export const containerMotion = {
	hidden: { opacity: 0 },
	visible: (i = 1) => ({
		opacity: 1,
		transition: { staggerChildren: 0.2, delayChildren: 0.04 * i },
	}),
};

export const childMotion = {
	visible: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			type: "spring",
			damping: 12,
			stiffness: 100,
		},
	},
	hidden: {
		opacity: 0,
		x: -20,
		y: 10,
		transition: {
			type: "spring",
			damping: 12,
			stiffness: 100,
		},
	},
};
