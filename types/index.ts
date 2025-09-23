import { ImageSourcePropType } from 'react-native';

export interface ITransaction {
  id: string;
  amount: number;
  merchant: IMerchant;
  date: Date;
}

export interface IMerchant {
  name: string;
  logo: ImageSourcePropType;
}

export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: ImageSourcePropType | string;
}

export interface ICard {
  id: string;
  expiry: string;
  holderName: string;
  number: string;
  provider: 'Mastercard' | 'Visa';
  category: string;
}

export interface ICardType {
  id: string;
  title: string;
  description: string;
  color: string;
}
