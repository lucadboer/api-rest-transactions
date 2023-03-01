import { z } from 'zod'
import 'dotenv/config'

const envEschema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envEschema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variable!', _env.error.format())

  throw new Error('Invalid environment variable')
}

export const env = _env.data
