import {z} from "zod";

export const SUser = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    createdAt: z.string().date()
});

