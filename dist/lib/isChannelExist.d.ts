/**
 * @module isChannelExist
 * Checks if a channel with a specified name exists within a guild.
 *
 * @param token - The token used for authentication with the Discord API.
 * @param guildId - The ID of the guild to check.
 * @param channelName - The name of the channel to look for.
 * @returns A promise that resolves to a boolean indicating whether the channel exists.
 * @throws Will throw an error if the REST API call fails.
 *
 * @example
 * const token = 'your_discord_token_here';
 * const guildId = 'your_guild_id_here';
 * const channelName = 'general';
 *
 * isChannelExist(token, guildId, channelName)
 *   .then(exists => console.log(exists ? 'Channel exists.' : 'Channel does not exist.'))
 *   .catch(error => console.error(`Error: ${error.message}`));
 */
export declare const isChannelExist: (token: string, guildId: string, channelName: string) => Promise<boolean>;
