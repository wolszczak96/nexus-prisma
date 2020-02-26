import * as path from 'path'
import * as Nexus from 'nexus'
import { nexusPrismaPlugin } from 'nexus-prisma'
import { Query } from './Query'
import { Mutation } from './Mutation'
import { User } from './User'

export default Nexus.makeSchema({
  types: [Query, Mutation, User],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    typegen: path.join(
      __dirname,
      '../../node_modules/@types/nexus-typegen/index.d.ts',
    ),
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        // FIXME: it works with `now dev` only if you use absolute path
        source:
          process.env.NEXUS_CONTEXT_PATH ||
          path.resolve(__dirname, '../context.ts'),
        alias: 'Context',
      },
    ],
  },
})
