import { execSync } from 'child_process'

export function getChangeLog() {
  try {
    const remoteURL = execSync('git remote get-url origin').toString().trim()

    console.log(`remoteURL: ${remoteURL}`)
    const matchResult = remoteURL.match(
      /github\.com[/:]([^/]+)\/([^/]+?)(?:\.git)?$/,
    )
    console.log(`matchResult: ${matchResult}`)
    if (!matchResult) {
      throw new Error('Could not extract repository owner and name.')
    }

    const repositoryOwner = matchResult[1]
    const repositoryName = matchResult[2]

    const log = execSync(
      `git log $(git describe --tags --abbrev=0)..HEAD --pretty=format:"- %s by @%an in #%h"`,
    ).toString()
    const lines = log.split('\n')
    const githubCommitURL = `https://github.com/${repositoryOwner}/${repositoryName}/commit`
    const formattedLines = lines.map((line) => {
      if (line.startsWith('Merge pull request')) {
        return line
      } else {
        return line.replace(/#(\w+)/g, (match) => {
          const shortHash = match.substring(1)
          return `${githubCommitURL}/${shortHash}`
        })
      }
    })
    const formattedLog = formattedLines.join('\n')

    return `## What's Changed\n\n${formattedLog}`
  } catch (error) {
    console.log(`Error in getChangeLog: ${error}`)
    return ''
  }
}

const res = getChangeLog()
console.log(res)
