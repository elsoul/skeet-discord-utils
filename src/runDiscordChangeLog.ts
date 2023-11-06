import dotenv from 'dotenv'
import { discordChangeLog } from './lib/discordChangeLog'
dotenv.config()

const REPO_NAME = 'elsoul/skeet-discord-utils'

const run = async () => {
  const token = process.env.DISCORD_TOKEN || ''
  const channelId = process.env.DISCORD_CHANNEL_ID || ''
  const channelIdJA = process.env.DISCORD_CHANNEL_ID_JA || ''
  await discordChangeLog(token, REPO_NAME, [channelId])
  await discordChangeLog(token, REPO_NAME, [channelIdJA], 'ja')
}

run()
