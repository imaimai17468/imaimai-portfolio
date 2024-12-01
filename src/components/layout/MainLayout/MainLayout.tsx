import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";

import { BackgroundAnimation } from "@/components/screen/BackgroundAnimation";
import { Header } from "@/components/screen/Header";
import { spring, useVariants } from "@/hooks/useVariants";
import { cursorState } from "@/store/cursor";

import type { MainLayoutProps } from "./MainLayout.type";

export const MainLayout: React.FC<MainLayoutProps> = ({
	children,
}: MainLayoutProps) => {
	const cursor = useRecoilValue(cursorState);
	const variants = useVariants();

	return (
		<div className="font-mono text-gray-200">
			<Header />
			<BackgroundAnimation />
			<motion.div
				variants={variants}
				className="invisible fixed z-50 flex items-center justify-center rounded-full md:visible"
				animate={cursor.variant}
				transition={spring}
			>
				<div>{cursor.text}</div>
			</motion.div>
			{children}
		</div>
	);
};

export default MainLayout;
