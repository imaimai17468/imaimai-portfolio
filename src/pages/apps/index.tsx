import type { NextPage } from "next";
import Link from "next/link";

import { Button } from "@/components/common";
import { ProductCard } from "@/components/feature/Apps/ProductCard";
import { products } from "@/constants/products";
import { useCursor } from "@/hooks/useCursor";

const AppsPage: NextPage = () => {
	const { cursorChange2Default, cursorChange2Page } = useCursor();

	return (
		<div className="flex flex-col items-center">
			<div className="my-12 flex w-9/10 flex-col gap-4 bg-background bg-opacity-70 p-10 lg:my-48 lg:w-3/5 xl:w-1/2">
				<h2 className="w-fit border-b-2 border-emerald-400 text-2xl">App</h2>
				<div className="grid w-full grid-cols-2 gap-4">
					{products.map((product) => (
						<ProductCard key={product.name} product={product} />
					))}
				</div>
				<Link href="/" className="mx-auto">
					<Button
						onMouseEnter={cursorChange2Page}
						onMouseLeave={cursorChange2Default}
					>
						TOP PAGE
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default AppsPage;
