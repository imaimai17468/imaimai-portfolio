"use client";

import { motion, useAnimation } from "framer-motion";
import type React from "react";
import { useEffect, useState } from "react";

import { CharAnimation } from "@/components/common";

import { SparklesCore } from "../SparklesCore";

export const Loading: React.FC = () => {
	const controls = useAnimation();
	const [style, setStyle] = useState({});

	useEffect(() => {
		const timeout = setTimeout(() => {
			controls.start({ opacity: 0 }).then(() => setStyle({ display: "none" }));
		}, 4000);

		return () => clearTimeout(timeout);
	}, [controls]);

	return (
		<motion.div
			initial={{ opacity: 1 }}
			animate={controls}
			transition={{ duration: 1 }}
			className="fixed top-0 z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-md bg-background"
			style={style}
		>
			<CharAnimation
				className="relative z-20 text-center text-3xl font-bold text-white md:text-7xl"
				char="Hello, world"
			/>
			<div className="relative h-40 w-[40rem]">
				<div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
				<div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
				<div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
				<div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
				<SparklesCore
					background="transparent"
					minSize={0.4}
					maxSize={1}
					particleDensity={1200}
					className="h-full w-full"
					particleColor="#FFFFFF"
				/>
				<div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
			</div>
		</motion.div>
	);
};
