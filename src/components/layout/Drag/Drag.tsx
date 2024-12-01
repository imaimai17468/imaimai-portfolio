import { motion } from "framer-motion";

import type { DragProps } from "./Drag.type";

export const Drag: React.FC<DragProps> = ({
	children,
	container,
	className,
	drag = true,
}: DragProps) => (
	<motion.div
		className={className}
		drag={drag}
		dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
		dragElastic={0.5}
		dragConstraints={container}
	>
		{children}
	</motion.div>
);

export default Drag;
