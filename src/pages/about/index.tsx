import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Button } from "@/components/common";
import { TimeTable } from "@/components/feature/About/TimeTable";
import { About } from "@/components/feature/Index/About";
import { ProgressBar } from "@/components/screen";
import { EVENTS } from "@/constants/events";
import { HISTORIES } from "@/constants/histories";
import { JOBS } from "@/constants/jobs";
import { useCursor } from "@/hooks/useCursor";

const AboutPage: NextPage = () => {
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

export default AboutPage;
