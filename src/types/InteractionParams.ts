export type Channel = {
  flags: number
  guild_id: string
  id: string
  last_message_id: string
  name: string
  nsfw: boolean
  parent_id: string
  permissions: string
  position: number
  rate_limit_per_user: number
  topic: string | null
  type: number
}

export type CommandData = {
  guild_id: string
  id: string
  name: string
  options: CommandOption[]
  type: number
}

export type CommandOption = {
  name: string
  value: string
}

export type Guild = {
  features: string[]
  id: string
  locale: string
}

export type InteractionParams = {
  app_permissions: string
  application_id: string
  channel: Channel
  channel_id: string
  data: CommandData
  entitlement_sku_ids: string[]
  entitlements: any[] // Replace 'any' with more specific export type if entitlements structure is known
  guild: Guild
  guild_id: string
  guild_locale: string
  id: string
  locale: string
  member: Member
  token: string
  type: number
  version: number
}

export type Member = {
  avatar: string | null
  communication_disabled_until: string | null
  deaf: boolean
  flags: number
  joined_at: string // or Date if you want to use a Date object
  mute: boolean
  nick: string | null
  pending: boolean
  permissions: string
  premium_since: string | null
  roles: string[]
  unusual_dm_activity_until: string | null
  user: User
}

export type User = {
  avatar: string
  avatar_decoration_data: any | null
  discriminator: string
  global_name: string
  id: string
  public_flags: number
  username: string
}
