import { queryType, intArg, stringArg } from 'nexus'

export const Query = queryType({
  definition(t) {
    t.crud.users({ filtering: true, alias: 'people' })
  },
})
