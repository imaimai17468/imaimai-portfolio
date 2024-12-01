import type { NextPage } from "next";
import { useEffect, useRef } from "react";

import { About, Application, Skill, Top } from "@/components/feature";
import { ProgressBar } from "@/components/screen";
import { useCursor } from "@/hooks/useCursor";

const IndexPage: NextPage = () => {
	const topRef = useRef(null);
	const aboutRef = useRef(null);
	const applicationRef = useRef(null);
	const skillRef = useRef(null);
	const { cursorChange2Default } = useCursor();

	useEffect(() => {
		cursorChange2Default();
	}, [cursorChange2Default]);

	return (
		<div>
			{/* <Loading /> */}
			<ProgressBar
				topRef={topRef}
				aboutRef={aboutRef}
				skillsRef={skillRef}
				applicationRef={applicationRef}
			/>
			<div className="my-10 flex flex-col items-center gap-20">
				<Top topRef={topRef} />
				<About aboutRef={aboutRef} />
				<Application applicationRef={applicationRef} />
				<Skill skillRef={skillRef} />
			</div>
		</div>
	);
};

export default IndexPage;
