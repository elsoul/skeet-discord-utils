/**
 * Sends a response to a Discord interaction.
 *
 * @param {string} token - The bot's token used for authentication with the Discord API.
 * @param {string} interactionId - The ID of the interaction to respond to.
 * @param {string} interactionToken - The token specific to the interaction.
 * @param {any} body - The content of the response message.
 * @returns {Promise<boolean>} A promise that resolves to true if the response is sent successfully.
 * @throws {Error} Will throw an error if there is a problem sending the response.
 *
 * @example
 * ```
 * const token = 'your_discord_token_here'
 * const interactionId = 'your_interaction_id_here'
 * const interactionToken = 'your_interaction_token_here'
 * const body = {
 *  type: 4,
 *  data: {
 *   content: 'Hello, world!',
 *  },
 * }
 * const result = await interactionMessage(token, interactionId, interactionToken, body)
 * console.log(result); // true
 * ```
 */
export declare function interactionMessage(token: string, interactionId: string, interactionToken: string, body: any): Promise<boolean>;
