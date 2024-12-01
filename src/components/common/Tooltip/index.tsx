import { useEffect, useState } from "react";

export interface TooltipProps {
	children: React.ReactNode;
	text: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
	children,
	text,
}: TooltipProps) => {
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		if (isClicked) {
			setTimeout(() => {
				setIsClicked(false);
			}, 500);
		}
	}, [isClicked]);

	return (
		<div className="relative">
			<div
				className={`${
					isClicked ? "visible opacity-100" : "invisible opacity-0"
				} absolute left-1/2 w-fit -translate-x-1/2 -translate-y-8 whitespace-nowrap rounded-md border border-gray-200 bg-background px-2 py-1 text-sm transition-all`}
			>
				<p>{text}</p>
			</div>
			<button
				type="button"
				onClick={() => {
					setIsClicked(true);
				}}
			>
				{children}
			</button>
		</div>
	);
};
