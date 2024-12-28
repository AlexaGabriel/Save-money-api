import { z } from "zod";

export const SBill = z.object({
    userId: z.string(),
    name: z.string().min(3, "Bill name must have at least 3 characters"),
    amount: z.number(),
    dueDate: z.string().refine((value) => !isNaN(Date.parse(value)), {
        message: "Invalid date format.",}),
    isPaid: z.boolean(),
    createdAt: z.date() 
});
export const SBillU = z.object({
    name: z.string().min(3, "Bill name must have at least 3 characters"),
    amount: z.number(),
    dueDate: z.string().refine((value) => !isNaN(Date.parse(value)), {
        message: "Invalid date format.",}), 
    isPaid: z.boolean(),
    createdAt: z.date() 
});
