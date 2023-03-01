import { FastifyRequest, FastifyReply } from 'fastify'

export async function checkSessionIdExist(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { sessionId } = req.cookies

  if (!sessionId) {
    return res.status(401).send({
      message: 'Unauthorized',
    })
  }
}
