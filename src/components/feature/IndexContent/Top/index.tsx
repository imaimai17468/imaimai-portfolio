import { CharAnimation } from "@/components/common";
import { useMemo } from "react";
import { BsMouseFill } from "react-icons/bs";

export interface TopProps {
	topRef: React.RefObject<HTMLDivElement>;
}

export const Top: React.FC<TopProps> = ({ topRef }) => {
	const timeText = useMemo(() => {
		const date = new Date();
		const hour = date.getHours();
		if (hour >= 5 && hour < 12) {
			return "Good Morning!!";
		}
		if (hour >= 12 && hour < 18) {
			return "Good Afternoon!!";
		}
		return "Good Evening!!";
	}, []);

	return (
		<div
			id="top"
			className="flex h-screen -translate-y-12 flex-col items-center justify-center text-2xl font-thin text-gray-200 md:text-5xl"
			ref={topRef}
		>
			<div className="mb-10 w-fit bg-background bg-opacity-70 p-5 md:p-10">
				<h1>{timeText}</h1>
				<div className="flex gap-10">
					<h1>I&apos;m</h1>
					<CharAnimation char="imaimai." className="text-emerald-500" />
				</div>
				<h1>Front End Developer</h1>
			</div>
			<div className="flex flex-col items-center gap-3 text-2xl">
				<p>Scroll Down</p>
				<BsMouseFill className="animate-bounce" />
			</div>
		</div>
	);
};
