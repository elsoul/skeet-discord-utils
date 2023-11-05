import { execSync } from 'child_process'

export function getChangeLog(repoName = 'elsoul/skeet-discord-utils') {
  try {
    const log = execSync(`gh release view --repo ${repoName}`).toString()

    return log
  } catch (error) {
    console.log(`Error in getChangeLog: ${error}`)
    return ''
  }
}

const res = getChangeLog()
console.log(res)
