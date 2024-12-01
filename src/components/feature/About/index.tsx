import { Button } from "@/components/common";
import { ProgressBar } from "@/components/screen";
import { EVENTS } from "@/constants/events";
import { HISTORIES } from "@/constants/histories";
import { JOBS } from "@/constants/jobs";
import { useCursor } from "@/hooks/useCursor";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { About } from "../IndexContent/About";
import { TimeTable } from "./TimeTable";

export const AboutContent: React.FC = () => {
	const router = useRouter();
	const handleClickButton = () => {
		router.push("/");
	};
	const { cursorChange2Page, cursorChange2Default } = useCursor();

	useEffect(() => {
		cursorChange2Default();
	}, [cursorChange2Default]);

	return (
		<main className="font-mono text-gray-200">
			<ProgressBar />
			<div className="my-10 flex flex-col items-center gap-20">
				<About />
				<TimeTable title="History" data={HISTORIES} />
				<TimeTable title="Job" data={JOBS} />
				<TimeTable title="Event" data={EVENTS} />
				<Button
					onClick={handleClickButton}
					onMouseEnter={cursorChange2Page}
					onMouseLeave={cursorChange2Default}
				>
					TOP PAGE
				</Button>
			</div>
		</main>
	);
};
