import {
	backendIcons,
	frontendIcons,
	otherIcons,
	toolIcons,
} from "@/utils/icons";

import { IconList } from "../IconList";
import type { SkillProps } from "./Skill.types";

const Skill: React.FC<SkillProps> = ({ skillRef }: SkillProps) => (
	<div
		id="skill"
		className="w-9/10 bg-background bg-opacity-70 p-10 lg:w-3/5 xl:w-1/2"
		ref={skillRef}
	>
		<h2 className="w-fit border-b-2 border-emerald-400 text-2xl">Skill</h2>
		<div className="my-5">
			<p className="text-xl font-thin text-emerald-400">Front End</p>
			<IconList icons={frontendIcons} />
		</div>
		<hr className="border-dotted border-gray-400" />
		<div className="my-5">
			<p className="text-xl font-thin text-emerald-400">Back End</p>
			<IconList icons={backendIcons} />
		</div>
		<hr className="border-dotted border-gray-400" />
		<div className="my-5">
			<p className="text-xl font-thin text-emerald-400">Other</p>
			<IconList icons={otherIcons} />
		</div>
		<hr className="border-dotted border-gray-400" />
		<div className="my-5">
			<p className="text-xl font-thin text-emerald-400">Tools</p>
			<IconList icons={toolIcons} />
		</div>
	</div>
);

export default Skill;
