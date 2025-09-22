import { COLORS } from "@/constants/colors.constants";
import { ICard, ICardType } from "@/types";

export const CARD: ICard = {
  id: '68d0bf7997ab9ca8adea8c90',
  expiry: '02/25',
  holderName: 'Momon',
  number: '1023302842999839',
  provider: 'Mastercard',
  category: 'Premium Card',
}

export const CARD_TYPES: ICardType[] = [
  {
    id: '68d16fed3b717ec4a4011359',
    title: 'Purple Card',
    description: 'Cashback and free service',
    color: COLORS.dark.purple,
  },
  {
    id: '68d16fed3b717ec4a401135a',
    title: 'Black Card',
    description: 'Get profitable benefits',
    color: COLORS.dark.primary,
  },
  {
    id: '68d16fed3b717ec4a401135b',
    title: 'Yellow Card',
    description: 'Special for you',
    color: COLORS.dark.yellow,
  },
  {
    id: '68d16fed3b717ec4a401135c',
    title: 'Green Card',
    description: 'Get more discounts',
    color: '#00C897',
  },
  {
    id: '68d16fed3b717ec4a401135d',
    title: 'Orange Card',
    description: 'Travel the world',
    color: '#FF6B00',
  },
]
