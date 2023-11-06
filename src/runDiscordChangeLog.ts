import dotenv from 'dotenv'
import { discordChangeLog } from './lib/discordChangeLog'
dotenv.config()

const run = async () => {
  const token = process.env.DISCORD_TOKEN || ''
  const channelId = process.env.DISCORD_CHANNEL_ID || ''
  const channelIdJA = process.env.DISCORD_CHANNEL_ID_JA || ''
  await discordChangeLog(token, 'elsoul/discord-utils', [channelId])
  await discordChangeLog(token, 'elsoul/discord-utils', [channelIdJA], 'ja')
}

run()
