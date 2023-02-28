import { knex as setupKnex, Knex } from 'knex'
import 'dotenv/config'
import { env } from './env'

export const knexConfig: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './db/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: env.DATABASE_URL,
  },
}

export const knex = setupKnex(knexConfig)
