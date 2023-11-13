import { REST, Routes, ApplicationCommandData } from 'discord.js'

/**
 * Deploys application commands to a specific guild.
 *
 * This function authenticates with the Discord API using the provided token,
 * then deploys the specified commands to the given guild.
 *
 * @param {string} token - The token used for authentication with the Discord API.
 * @param {string} discordClientId - The Discord client ID.
 * @param {string} guildId - The ID of the guild where commands are being deployed.
 * @param {ApplicationCommandData[]} commands - An array of ApplicationCommandData representing the commands to be deployed.
 * @returns {Promise<void>} A promise that resolves when commands are successfully deployed.
 * @throws {Error} Will throw an error if there is a problem with the deployment.
 *
 * @example
 * ```typescript
 * import { config } from 'dotenv'
 * config()
 * const run = async () => {
 *   const token = process.env.DISCORD_TOKEN || ''
 *   const discordClientId = process.env.DISCORD_CLIENT_ID || ''
 *   const guildId = process.env.DISCORD_GUILD_ID || ''
 *
 *   const commands = [
 *     {
 *       name: 'ping',
 *       description: 'Replies with pong',
 *     },
 *   ]
 *
 *   try {
 *     await deployCommands(token, discordClientId, guildId, commands)
 *     console.log('Commands deployed successfully.')
 *   } catch (error) {
 *     console.error(`Error deploying commands: ${error}`)
 *   }
 * }
 *
 * run()
 *   .then(() => console.log('Done'))
 *   .catch((error) => console.error(error))
 * ```
 */

export async function deployCommands(
  token: string,
  discordClientId: string,
  guildId: string,
  commands: ApplicationCommandData[],
): Promise<void> {
  try {
    console.log('Started refreshing application (/) commands.')
    const rest = new REST({ version: '10' }).setToken(token)
    await rest.put(Routes.applicationGuildCommands(discordClientId, guildId), {
      body: commands,
    })

    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(`deployCommands: ${error}`)
    throw new Error(`deployCommands: ${error}`)
  }
}
