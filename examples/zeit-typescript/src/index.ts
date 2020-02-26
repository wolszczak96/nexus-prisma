import { NowRequest, NowResponse } from '@now/node'
import { printSchema } from 'graphql'
import { createContext } from './context'
import schema from './schema'

export default function(_req: NowRequest, res: NowResponse) {
  const ctx = createContext()

  ctx.prisma.user.findMany().then(allUsers => {
    res.status(200).send(`<div>
    <pre>${printSchema(schema)}</pre>
    <pre>${JSON.stringify(allUsers, null, 2)}</pre>
  </div>`)
  })
}
