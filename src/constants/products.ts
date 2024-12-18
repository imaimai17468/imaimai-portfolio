import type { Product } from "@/@types/product";

export const products: Product[] = [
	{
		name: "木更津高専単位カウンター",
		description:
			"木更津高専の単位をカウントするアプリです。各学科ごとに単位を計算し、卒業までの単位数を計算することができます。",
		popularity: 1,
		image: "/images/products/knct.png",
		role: "全部",
		date: "2020 9月",
		techs: ["HTML", "CSS", "JavaScript"],
		links: {
			product:
				"https://imaimai-portfolio.vercel.app/CreditsCounterforKNCT/index.html",
			qiita: "https://qiita.com/imaimai17468/items/0b43c9c9e1f8f16ccea3",
		},
	},
	{
		name: "Martian",
		description:
			"文化祭に展示するために作った鬼畜アクションゲームです。火星人の触手を操ってゴールを目指します。",
		popularity: 1,
		image: "/images/products/martian.png",
		role: "全部",
		date: "2021 10月",
		techs: ["Unity"],
		links: {
			product: "https://unityroom.com/games/martian",
		},
	},
	{
		name: "Bibliography Filter",
		description: "信用に足る参考文献のみを検索できるwebアプリケーションです。",
		popularity: 4,
		image: "/images/products/biblio.png",
		logo: "/images/products/biblio_logo.png",
		role: "フロントエンド・バックエンド",
		date: "2022 6月",
		techs: ["React", "FastAPI", "Docker", "TypeScript", "Python"],
		links: {
			github:
				"https://github.com/NUTMEG-hackathon/bibliography_filter/tree/develop",
			slide:
				"https://docs.google.com/presentation/d/1IObCAww-xq4MgAhr9wCmFiwXJoCvS_ARFQOg3EOGGjk/edit?usp=sharing",
		},
	},
	{
		name: "NUTMEG Seeds",
		description:
			"NUTMEGの勉強進捗やメンバー間のつながり、勉強会で使用するカリキュラムなどを記録するためのアプリケーションです。",
		popularity: 6,
		image: "/images/products/seeds.png",
		role: "フロントエンド・バックエンド",
		date: "2022 6月 ~",
		techs: ["Next.js", "Rails", "Docker", "TypeScript"],
		links: {
			github: "https://github.com/NUTFes/NUTMEG-Seeds",
			slide:
				"https://docs.google.com/presentation/d/1E1sfNE5K3RQa_ad4wLrgDHhA9pxx8gkL/edit?usp=sharing&ouid=100611567160694178635&rtpof=true&sd=true",
		},
	},
	{
		name: "WringPaper",
		description: "8種類の横棒のみでプログラミングができるサイトです。",
		popularity: 1,
		image: "/images/products/paper.png",
		role: "全部",
		date: "2022 6月",
		techs: ["React", "FastAPI", "Docker", "TypeScript"],
		links: {
			github: "https://github.com/imaimai17468/WritingPaper",
			slide:
				"https://drive.google.com/file/d/1MYsrbsDikNQn9F9ZE8j6bOKJN50GiYMo/view?usp=sharing",
		},
	},
	{
		name: "FinanSu",
		description:
			"技大祭の資金管理をより円滑にするためのWebアプリケーションです。",
		popularity: 8,
		image: "/images/products/finansu.png",
		logo: "/images/products/finansu_logo.svg",
		role: "PM・フロントエンド",
		date: "2022 9月 ~",
		techs: ["Next.js", "Go", "Docker", "TypeScript"],
		links: {
			github: "https://github.com/NUTFes/FinanSu",
			slide:
				"https://docs.google.com/presentation/d/13MDFLSlJoL7IjJAYpROsIqTJSDR6whIZ/edit?usp=sharing&ouid=100611567160694178635&rtpof=true&sd=true",
		},
	},
	{
		name: "Group-Manager-2",
		description:
			"技大祭の参加団体の管理をより円滑にするためのWebアプリケーションです。",
		popularity: 10,
		image: "/images/products/group.png",
		role: "フロントエンド",
		date: "2022 10月 ~",
		techs: ["Next.js", "Rails", "Docker", "TypeScript"],
		links: {
			github: "https://github.com/NUTFes/group-manager-2",
			slide:
				"https://docs.google.com/presentation/d/1GJ9rAku8HDjErt069q_jSoJU0gl8k-S8-nX4HNddFO0/edit?usp=sharing",
		},
	},
	{
		name: "PrefPops",
		description: "ゆめみのフロントエンドコーディング課題で作成したサイトです。",
		popularity: 1,
		image: "/images/products/pref.png",
		role: "フロントエンド",
		date: "2022 11月",
		techs: ["Next.js", "TypeScript"],
		links: {
			github: "https://github.com/imaimai17468/yumemi",
			product: "https://yumemi-wheat.vercel.app/",
		},
	},
	{
		name: "いまいまいチャット",
		description: "インターンの課題で作ったチャットアプリです。",
		popularity: 1,
		image: "/images/products/chat.png",
		role: "フロントエンド",
		date: "2022 11月",
		techs: ["Next.js", "TypeScript", "Firebase"],
		links: {
			github: "https://github.com/imaimai17468/RandD-internship-task",
			product: "https://rand-d-internship-task.vercel.app/",
		},
	},
	{
		name: "ShibaMatch",
		description: "辛い時にしば犬の画像を見て癒されるためのアプリです。",
		popularity: 1,
		image: "/images/products/shiba.png",
		role: "フロントエンド",
		date: "2023 1月",
		techs: ["Next.js", "TypeScript"],
		links: {
			github: "https://github.com/imaimai17468/shibaMatch",
			product: "https://shiba-match.vercel.app/",
			slide:
				"https://drive.google.com/file/d/1DiWzPdp9bSQitMH9iDuyGNsr4FGFS-g5/view?usp=sharing",
		},
	},
	{
		name: "TrackingParking",
		description: "駐車場の空き状況をリアルタイムで確認できるアプリです。",
		popularity: 3,
		image: "/images/products/parking.png",
		role: "フロントエンド",
		date: "2023 3月",
		techs: ["Next.js", "TypeScript", "MongoDB", "Python", "DeepLearning"],
		links: {
			github: "https://github.com/NUTFes/tracking-parking",
			slide:
				"https://docs.google.com/presentation/d/1Juucm7S0rWtzMJnSPszK2CzO9Ry6oWrYJ9KyZFyTsi4/edit?usp=sharing",
		},
	},
	{
		name: "調整ちゃん",
		description: "日付をドラッグで指定できる日程調整アプリです。",
		popularity: 1,
		image: "/images/products/chosei.png",
		logo: "/images/products/chosei_logo.png",
		role: "フロントエンド・レビュアー",
		date: "2023 7月",
		techs: ["Next.js", "TypeScript", "Firebase"],
		links: {
			github: "https://github.com/NUTFes/chosei-chan",
			slide:
				"https://docs.google.com/presentation/d/169e-HZ4RJfbuaox60fEmSz5mqJ-OPNXBgauHIeYtEX4/edit?usp=sharing",
			product: "https://chosei-chan.vercel.app/",
		},
	},
	{
		name: "NUTyama",
		description:
			"NUTMEGの1on1の内容を音声認識し、Markdown形式で出力するアプリです。",
		popularity: 1,
		image: "/images/products/nutyama.png",
		role: "フロントエンド",
		date: "2023 8月",
		techs: ["Next.js", "TypeScript"],
		links: {
			github: "https://github.com/imaimai17468/NUTyama",
			slide:
				"https://docs.google.com/presentation/d/1IjyJQBm4RFVTVeAWgBo20OaVmWpzGXS_xAP-lRfE1gE/edit?usp=sharingg",
		},
	},
	{
		name: "ts-audio-visualizer",
		description: "TypeScriptで作成したオーディオビジュアライザーです。",
		popularity: 1,
		image: "/images/products/audio.png",
		role: "フロントエンド",
		date: "2023 7月",
		techs: ["React", "TypeScript"],
		links: {
			github: "https://github.com/imaimai17468/ts-audio-visualizer",
			product:
				"https://www.npmjs.com/package/ts-audio-visualizer?activeTab=readme",
		},
	},
	{
		name: "akeo.me",
		description: "年越しを祝うサイト",
		popularity: 1,
		image: "/images/products/akeome.png",
		role: "全て",
		date: "2023 12月",
		techs: ["Next.js", "TypeScript", "shadcn/ui", "ts-particles"],
		links: {
			github: "https://github.com/imaimai17468/akeome",
			product: "https://akeo.me/",
		},
	},
	{
		name: "AtCoderTeamBattle",
		description: "AtCoderでチーム戦ができるサイト",
		popularity: 1,
		image: "/images/products/ac-team-battle.png",
		role: "全て",
		date: "2023 10月 ~ 現在",
		techs: ["React", "TypeScript"],
		links: {
			github: "https://github.com/imaimai17468/atcoder-teambattle",
		},
	},
];
