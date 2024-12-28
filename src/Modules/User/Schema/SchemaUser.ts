import { z } from "zod";

export const SUser = z.object({
    name: z.string().min(3, "Name must have at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string(),
    createdAt: z.date() 
});

