import type { Metadata } from "next"
import "@fontsource-variable/public-sans"
import "@/styles/globals.css"

export const metadata: Metadata = {
	title: "Easy Stock",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={"antialiased"}>{children}</body>
		</html>
	)
}
