"use client"

import { type LoginType, loginSchema } from "@/types/auth-types"
import { zodResolver } from "@hookform/resolvers/zod"
import { defineStepper } from "@stepperize/react"
import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { useForm } from "react-hook-form"

const { useStepper } = defineStepper({ id: "email" }, { id: "password" })

export function LoginForm() {
	const {
		register,
		handleSubmit,
		trigger,
		formState: { errors },
	} = useForm<LoginType>({
		resolver: zodResolver(loginSchema),
	})

	const methods = useStepper()
	const step = methods.current?.id

	function onSubmit(values: LoginType) {
		console.log(values)
	}

	return (
		<form
			className="flex flex-col space-y-2 w-full"
			onSubmit={handleSubmit(onSubmit)}
		>
			<AnimatePresence mode="wait" initial={false}>
				{step === "email" && (
					<motion.section
						key="email"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 50 }}
						transition={{ duration: 0.3 }}
						className="flex flex-col space-y-2"
					>
						<input
							required
							type="email"
							placeholder="kevin@correo.com"
							className="flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
							{...register("email")}
						/>
						{errors.email && (
							<span className="text-red-500 text-xs">
								{errors.email.message}
							</span>
						)}

						<button
							type="button"
							onClick={async () => {
								const valid = await trigger("email")
								if (!valid) return

								methods.beforeNext(() => true)
							}}
							className="py-2 px-3 rounded-lg bg-black text-white text-sm"
						>
							Continuar
						</button>
					</motion.section>
				)}
				{step === "password" && (
					<motion.section
						key="password"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.3 }}
						className="flex flex-col space-y-2"
					>
						<input
							required
							type="password"
							placeholder="Contraseña"
							className="flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
							{...register("password")}
						/>
						{errors.password && (
							<span className="text-red-500 text-xs">
								{errors.password.message}
							</span>
						)}

						<button
							type="submit"
							className="py-2 px-3 rounded-lg bg-black text-white text-sm"
						>
							Iniciar Sesión
						</button>
					</motion.section>
				)}
			</AnimatePresence>
		</form>
	)
}
