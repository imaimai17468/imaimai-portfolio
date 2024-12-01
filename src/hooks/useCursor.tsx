import { useCallback } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { CgScrollV } from "react-icons/cg";
import { MdOutlineContactPage } from "react-icons/md";
import { useRecoilState } from "recoil";

import { cursorState } from "@/store/cursor";

export const useCursor = () => {
	const [_, setCursor] = useRecoilState(cursorState);

	const cursorChange2Link = useCallback(() => {
		setCursor({
			text: <AiOutlineLink className="text-3xl" />,
			variant: "link",
		});
	}, [setCursor]);

	const cursorChange2Default = useCallback(() => {
		setCursor({
			text: "🐸",
			variant: "default",
		});
	}, [setCursor]);

	const cursorChange2Page = useCallback(() => {
		setCursor({
			text: <MdOutlineContactPage className="text-3xl" />,
			variant: "page",
		});
	}, [setCursor]);

	const cursorChange2Move = useCallback(() => {
		setCursor({
			text: <CgScrollV className="text-3xl" />,
			variant: "move",
		});
	}, [setCursor]);

	return {
		cursorChange2Link,
		cursorChange2Default,
		cursorChange2Page,
		cursorChange2Move,
	};
};
