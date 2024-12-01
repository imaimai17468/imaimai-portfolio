import { motion } from "framer-motion";

import type { Icon } from "@/@types/icon";
import { AnimatedTooltip } from "@/components/common/AnimatedTooltip";
import { containerMotion } from "@/utils/motions";

type IconListProps = {
	icons: Icon[];
};

const IconList: React.FC<IconListProps> = ({ icons }: IconListProps) => (
	<motion.div
		className="my-5 grid grid-cols-3 justify-items-center gap-y-5 text-4xl md:grid-cols-6 md:gap-y-10"
		variants={containerMotion}
		initial="hidden"
		whileInView="visible"
	>
		{icons.map((icon) => (
			<AnimatedTooltip key={icon.name} name={icon.name}>
				{icon.icon}
			</AnimatedTooltip>
		))}
	</motion.div>
);

export default IconList;
