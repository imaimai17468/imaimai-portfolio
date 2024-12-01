import { Loading, ProgressBar } from "@/components/screen";
import { useCursor } from "@/hooks/useCursor";
import { useEffect, useRef } from "react";
import { About } from "./About";
import { Application } from "./Application";
import { Skill } from "./Skill";
import { Top } from "./Top";

export const IndexContent: React.FC = () => {
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
			<Loading />
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
