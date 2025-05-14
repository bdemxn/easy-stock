import { z } from "zod"

export const loginSchema = z.object({
	email: z.string().email("Correo no válido"),
	password: z
		.string()
		.min(8, "Al menos 8 carácteres")
		.max(40, "No más de 40 carácteres"),
})

export const registerSchema = loginSchema.extend({
	name: z.string().min(3, "El nombre es muy corto"),
})

export type LoginType = z.infer<typeof loginSchema>
export type RegisterType = z.infer<typeof registerSchema>
