import { motion } from "framer-motion";

import type { ProgressCircleProps } from "./types";

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
	progress,
}: ProgressCircleProps) => (
	<figure>
		<svg id="progress" width="50" height="50" viewBox="0 0 100 100">
			<title>Progress Circle</title>
			<circle
				cx="50"
				cy="50"
				r="20"
				className="stroke fill-emerald-400 stroke-2"
			/>
			<motion.circle
				cx="50"
				cy="50"
				r="30"
				pathLength="1"
				className="stroke fill-none stroke-emerald-400 stroke-2"
				style={{ pathLength: progress }}
			/>
		</svg>
	</figure>
);
