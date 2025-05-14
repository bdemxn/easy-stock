import { z } from "zod"

export const itemSchema = z.object({
	id: z.string().optional(),
	userId: z.string().optional(),
	name: z.string(),
	quantity: z.number(),
	price: z.number(),
	labels: z.array(z.string()).optional(),
	warehouse: z.string(),
	createdAt: z.date().optional(),
})

export type Item = z.infer<typeof itemSchema>
