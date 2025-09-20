import { SelectContactContext } from '@/store/SelectContactContext';
import { useContext } from 'react';

export const useSelectContact = () => {
  const ctx = useContext(SelectContactContext);

  if (!ctx) {
    throw new Error('useSelectContact must be used within ContactSelectProvider')
  };

  return ctx;
};
