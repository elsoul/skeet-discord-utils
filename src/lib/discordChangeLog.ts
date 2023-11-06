import { execSync } from 'child_process'
import { messageChannel } from './messageChannel'

export const discordChangeLog = async (
  discordToken: string,
  repoName: string,
  channelIds: string[],
  lang = '',
) => {
  try {
    const log = getReleaseInfoAsJson(repoName)
    const repo = repoName.split('/')[1]
    const headLine = lang === 'ja' ? 'をリリースしました' : 'Released'
    const content = `## ${repo} ${log.tag} ${headLine} 🎉
    
${log.whatsChanged}
`
    for (const channelId of channelIds) {
      const message = {
        content,
      }
      await messageChannel(discordToken, channelId, message)
      // sleep for 0.3 second to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 300))
    }
    return content
  } catch (error) {
    console.log(`Error in getChangeLog: ${error}`)
    return ''
  }
}

export type ReleaseInfo = {
  tag: string
  draft: boolean
  prerelease: boolean
  author: string
  created: string
  published: string
  url: string
  whatsChanged: string
}

export function getReleaseInfoAsJson(repoName: string): ReleaseInfo {
  const log = execSync(`gh release view --repo ${repoName}`).toString()
  const header = log.split('--')[0].trim()
  const headerLines = header.split('\n').map((line) => line.trim())

  const jsonOutput: { [key: string]: string | boolean } = {}

  let currentKey = ''
  headerLines.forEach((line) => {
    if (line.includes(':')) {
      const [key, value] = line.split(':').map((item) => item.trim())
      currentKey = key
      if (value) {
        if (value === 'true' || value === 'false') {
          jsonOutput[key] = value === 'true'
        } else {
          jsonOutput[key] = value
        }
      }
    } else if (currentKey) {
      jsonOutput[currentKey] += line
    }
  })
  jsonOutput.whatsChanged = log.split('--')[1].trim()
  return jsonOutput as ReleaseInfo
}
