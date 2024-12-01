import Image from "next/image";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { RiSlideshowLine } from "react-icons/ri";
import { SiGithub, SiQiita } from "react-icons/si";

import type { Product } from "@/@types/product";
import { Modal } from "@/components/common";
import { useCursor } from "@/hooks/useCursor";

export const ProductCard: React.FC<{ product: Product }> = ({
	product,
}: { product: Product }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { cursorChange2Link, cursorChange2Default, cursorChange2Page } =
		useCursor();

	return (
		<>
			{isModalOpen && (
				<Modal title={product.name} onClose={() => setIsModalOpen(false)}>
					<div className="flex flex-col gap-4 md:flex-row">
						{product.image && (
							<Image
								src={product.image}
								alt={product.name}
								width={900}
								height={600}
								className="w-full rounded-md md:w-1/2"
							/>
						)}
						<div className="flex flex-col gap-2">
							<div className="flex flex-col gap-2">
								<p className="w-fit border-b border-emerald-400 font-bold">
									開発人数
								</p>
								<p>{product.popularity}人</p>
							</div>
							<div className="flex flex-col gap-2">
								<p className="w-fit border-b border-emerald-400 font-bold">
									役割
								</p>
								<p>{product.role}</p>
							</div>
							<div className="flex flex-col gap-2">
								<p className="w-fit border-b border-emerald-400 font-bold">
									開発期間
								</p>
								<p>{product.date}</p>
							</div>
							<div className="flex flex-col gap-2">
								<p className="w-fit border-b border-emerald-400 font-bold">
									使用技術
								</p>
								<div className="flex gap-2">
									{product.techs.map((tech) => (
										<p key={tech}>{tech}</p>
									))}
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<p className="w-fit border-b border-emerald-400 font-bold">
									説明
								</p>
								<p>{product.description}</p>
							</div>
							<div className="flex flex-col gap-2">
								<p className="w-fit border-b border-emerald-400 font-bold">
									関連リンク
								</p>
								<div className="flex gap-2">
									{product.links?.github && (
										<a
											href={product.links?.github}
											className="cursor-pointer"
											aria-label="github"
											onMouseEnter={() => cursorChange2Link()}
											onMouseLeave={() => cursorChange2Default()}
										>
											<SiGithub size="2rem" />
										</a>
									)}
									{product.links?.product && (
										<a
											href={product.links?.product}
											className="cursor-pointer"
											aria-label="link"
											onMouseEnter={() => cursorChange2Link()}
											onMouseLeave={() => cursorChange2Default()}
										>
											<FiExternalLink size="2rem" />
										</a>
									)}
									{product.links?.slide && (
										<a
											href={product.links?.slide}
											className="cursor-pointer"
											aria-label="slide"
											onMouseEnter={() => cursorChange2Link()}
											onMouseLeave={() => cursorChange2Default()}
										>
											<RiSlideshowLine size="2rem" />
										</a>
									)}
									{product.links?.qiita && (
										<a
											href={product.links?.qiita}
											className="cursor-pointer"
											aria-label="qiita"
											onMouseEnter={() => cursorChange2Link()}
											onMouseLeave={() => cursorChange2Default()}
										>
											<SiQiita size="2rem" />
										</a>
									)}
								</div>
							</div>
						</div>
					</div>
				</Modal>
			)}
			<button
				type="button"
				className="cursor-pointer break-words rounded-md border border-emerald-400 p-2 text-sm md:text-xl"
				onClick={() => setIsModalOpen(true)}
				onMouseEnter={() => cursorChange2Page()}
				onMouseLeave={() => cursorChange2Default()}
			>
				{product.logo ? (
					<Image
						src={product.logo}
						alt={`${product.name}のロゴ`}
						width={200}
						height={100}
						className="h-full w-full rounded-sm bg-gray-300 p-2"
					/>
				) : (
					<p>{product.name}</p>
				)}
			</button>
		</>
	);
};
