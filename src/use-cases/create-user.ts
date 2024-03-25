import { randomUUID } from 'crypto';
import { z } from 'zod';
import { User } from '../entities/user';
import userRepository from '../repositories/user.repository';
import { ValidationError } from '../types';

type CreateUserInput = Omit<User, 'id' | 'name'> & {
  firstName: string;
  lastName: string;
};

type CreateUserOutput = {
  errors: ValidationError[] | null;
  success: boolean;
  user: User | null;
};

const createUserSchema = z.object({
  firstName: z.string().trim().min(3),
  lastName: z.string().trim().min(3),
  email: z.string().trim().email(),
  phone: z
    .string()
    .trim()
    .min(11)
    .max(15)
    .regex(/(\(?\d{2}\)?\s?\d{5}-?\d{4})/gm),
  cpf: z
    .string()
    .trim()
    .min(11)
    .max(14)
    .regex(/(\d{3}\.?){3}(-?\d{2})$/gm),
  address: z.object({
    country: z.string().min(3),
    state: z.string().min(3),
    city: z.string().min(3),
    neighborhood: z.string().min(3),
    street: z.string().min(3),
    number: z.string().min(3),
    complement: z.string().min(3),
    zipCode: z.string().min(3),
  }),
});

export function createUser(input: CreateUserInput): CreateUserOutput {
  const result = createUserSchema.safeParse(input);

  if (!result.success) {
    return {
      success: false,
      user: null,
      errors: result.error.errors.map((error) => ({
        property: error.path.toString(),
        message: error.message,
      })),
    };
  }

  const { firstName, lastName, ...restUserData } = result.data;

  const user: User = {
    id: randomUUID(),
    name: `${firstName} ${lastName}`,
    ...restUserData,
  };

  userRepository.save(user);

  return {
    success: true,
    errors: null,
    user,
  };
}
