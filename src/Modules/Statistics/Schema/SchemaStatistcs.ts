import { z } from "zod";

export const SStatistics = z.object({
    totalIncome: z.number().min(0, { message: "Total income must be zero or a positive number." }),
    totalExpense: z.number().min(0, { message: "Total expense must be zero or a positive number." }),
    balance: z.number()
  });

