import { z } from "zod"

export const invoiceSchema = z.object({
	id: z.string().optional(),
	userId: z.string().optional(),
	customerName: z.string(),
	items: z.array(
		z.object({
			name: z.string(),
			quantity: z.number(),
			price: z.number(),
		}),
	),
	totalPaid: z.number(),
	createdAt: z.date().optional(),
})

export type Invoice = z.infer<typeof invoiceSchema>
