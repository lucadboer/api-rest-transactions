import { knex as setupKnex, Knex } from 'knex'
import 'dotenv/config'
import { env } from './env'

export const knexConfig: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite'
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}
export const knex = setupKnex(knexConfig)
