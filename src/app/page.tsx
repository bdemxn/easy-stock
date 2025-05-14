import { Navbar } from "@/components/web/navbar"
import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"
import * as React from "react"

export default function HomePage() {
	return (
		<React.Fragment>
			<Navbar />

			<main className="w-[900px] mx-auto lg:border-x border-neutral-200 min-h-dvh">
				<section className="text-center pt-20">
					<BadgeCard>¡Lanzamiento oficial de Easy-Stock! 🚀</BadgeCard>
					<h1 className="text-5xl sm:text-4xl font-bold text-gray-900">
						Tu inventario, en orden. Siempre.
					</h1>
					<h2>
						Olvídate del caos. Easy-Stock es rápido, simple y te hace sonreír.
					</h2>
				</section>

				<section className="text-center py-10">
					<Link
						href="/login"
						className="inline-flex items-center gap-x-1 py-2 px-3 rounded-lg bg-black text-white text-sm"
					>
						Probar gratis
						<ArrowUpRightIcon size={15} />
					</Link>
				</section>
			</main>
		</React.Fragment>
	)
}

export function BadgeCard({ children }: { children: React.ReactNode }) {
	return (
		<div className="inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium mb-4">
			<span>{children}</span>
		</div>
	)
}
