import { afterAll, beforeAll, describe, it } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'
import { randomUUID } from 'crypto'

describe('transactions', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New Transactions',
        amount: 1000,
        type: 'credit',
        session_id: randomUUID(),
      })
      .expect(201)
  })
})
