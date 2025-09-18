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
  photo: ImageSourcePropType | string;
}
