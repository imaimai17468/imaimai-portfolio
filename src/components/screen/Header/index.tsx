import { Drag, News } from "@/components/common";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { BsMusicNoteList } from "react-icons/bs";
import { Playlist } from "../Playlist";

export const Header: React.FC = () => {
	const [time, setTime] = useState(() => dayjs().format("HH:mm"));

	const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);

	const date = useMemo(() => {
		return dayjs().format("ddd D MMM YYYY");
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(dayjs().format("HH:mm"));
		}, 1000 * 60);
		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<div className="relative z-50">
				<div className="flex w-full flex-row items-center border-b border-gray-200 bg-background py-1 font-press text-xs md:text-sm">
					<div className="flex h-full items-center border-r border-gray-200 px-3">
						<p className="text-gray-200">imaimai&#39;s portfolio</p>
					</div>
					<div className="invisible grow md:visible">
						<News mode="absolute" />
					</div>
					<div className="flex h-full items-center px-3">
						<button
							type="button"
							className="text-gray-200"
							onClick={() => {
								setIsPlaylistOpen(!isPlaylistOpen);
							}}
							aria-label="playlist"
						>
							<BsMusicNoteList />
						</button>
					</div>
					<div className="flex h-full items-center border-gray-200 px-3 md:border-l">
						<p className="text-gray-200">{time}</p>
					</div>
					<div className="flex h-full items-center border-l border-gray-200 px-3">
						<p className="text-gray-200">{date}</p>
					</div>
				</div>
				<div className="block  md:hidden">
					<News />
				</div>
			</div>
			<Drag className="absolute z-10 w-72">
				<Playlist isOpen={isPlaylistOpen} setOpen={setIsPlaylistOpen} />
			</Drag>
		</>
	);
};
