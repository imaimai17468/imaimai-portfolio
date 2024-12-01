import type { RefObject } from "react";

import { AppLinkCard } from "./AppLinkCard";

export interface ApplicationProps {
	applicationRef?: RefObject<HTMLDivElement>;
}

export const Application: React.FC<ApplicationProps> = ({ applicationRef }) => (
	<div ref={applicationRef}>
		<AppLinkCard />
	</div>
);
