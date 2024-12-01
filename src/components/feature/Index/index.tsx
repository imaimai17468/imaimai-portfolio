import type { RefObject } from "react";

type IndexProps = {
	topRef: RefObject<HTMLDivElement>;
	aboutRef: RefObject<HTMLDivElement>;
	skillRef: RefObject<HTMLDivElement>;
	applicationRef: RefObject<HTMLDivElement>;
};

export const Index: React.FC<IndexProps> = ({
	topRef,
	aboutRef,
	skillRef,
	applicationRef,
}) => {
	return (
		<Index
			topRef={topRef}
			aboutRef={aboutRef}
			skillRef={skillRef}
			applicationRef={applicationRef}
		/>
	);
};
