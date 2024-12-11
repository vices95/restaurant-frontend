import { z } from 'zod';

export const menuItemSchema = z.object({
  description: z.string().min(1, 'La descripción es obligatoria'),
  price: z.number().min(1, 'El precio debe ser mayor a 0'), // in prisma price is an int so we cant use decimals
});
