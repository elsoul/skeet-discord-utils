import { execSync } from 'child_process'
import { messageChannel } from './messageChannel'

export const discordChangeLog = async (
  repoName = 'elsoul/skeet-discord-utils',
) => {
  try {
    const log = execSync(`gh release view --repo ${repoName}`).toString()
    const token = process.env.DISCORD_TOKEN || ''
    const channelId = process.env.DISCORD_CHANGELOG_CHANNEL_ID || ''
    const message = {
      content: log,
    }
    await messageChannel(token, channelId, message)
    return log
  } catch (error) {
    console.log(`Error in getChangeLog: ${error}`)
    return ''
  }
}

const run = async () => {
  const res = await discordChangeLog()
  console.log(res)
}

run()
