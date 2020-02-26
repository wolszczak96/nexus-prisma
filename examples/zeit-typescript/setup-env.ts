import { writeFileSync } from 'fs'
import { resolve } from 'path'

const PRISMA_DB_URL = `sqlite:${resolve('./prisma/dev.db')}`

const build = {
  PRISMA_DB_URL,
}

const runtime = {
  PRISMA_DB_URL,
  NEXUS_CONTEXT_PATH: resolve('./src/context.ts'),
}

writeFileSync('./.env.build', toEnvFile(build))
writeFileSync('./.env', toEnvFile(runtime))

function toEnvFile(env: { [_: string]: string }) {
  return Object.entries(env).reduce(
    (acc, [key, value]) => acc.concat(`${key}="${value}"\n`),
    '',
  )
}
