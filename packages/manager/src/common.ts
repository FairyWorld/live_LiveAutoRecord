import { AnyObject, UnknownObject } from './utils'

export type ChannelId = string

export const Qualities = ['lowest', 'low', 'medium', 'high', 'highest'] as const
export type Quality = (typeof Qualities)[number]

export interface MessageSender<E extends AnyObject = UnknownObject> {
  uid?: string
  name: string
  avatar?: string
  extra?: E
}

export interface Comment<E extends AnyObject = UnknownObject> {
  type: 'comment'
  timestamp: number
  text: string
  color?: string
  sender?: MessageSender
  extra?: E
}

export interface GiveGift<E extends AnyObject = UnknownObject> {
  type: 'give_gift'
  timestamp: number
  name: string
  count: number
  cost?: number
  sender?: MessageSender
  extra?: E
}

// TODO: Message 还有 SuperChat（或许算 Comment 的 Extra）之类的
export type Message = Comment | GiveGift
