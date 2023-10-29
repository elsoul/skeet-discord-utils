/**
 * @module removeUserRole
 * Removes a role from a user within a specific guild.
 *
 * @param token - The token used for authentication with the Discord API.
 * @param guildId - The ID of the guild from which the role will be removed.
 * @param userId - The ID of the user from whom the role will be removed.
 * @param roleId - The ID of the role to be removed.
 * @returns A promise that resolves to void when the role is successfully removed.
 * @throws Will throw an error if there is a problem removing the role.
 *
 * @example
 * const token = 'your_discord_token_here';
 * const guildId = 'your_guild_id_here';
 * const userId = 'your_user_id_here';
 * const roleId = 'your_role_id_here';
 *
 * const run = async () => {
 *   try {
 *     await removeUserRole(token, guildId, userId, roleId);
 *     console.log('Role removed successfully.');
 *   } catch (error) {
 *     console.error(`Error: ${error.message}`);
 *   }
 * }
 *
 * run();
 */
export declare function removeUserRole(token: string, guildId: string, userId: string, roleId: string): Promise<void>;
