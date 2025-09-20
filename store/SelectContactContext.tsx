import { IContact } from '@/types';
import { createContext, FC, ReactNode, useState } from 'react';

type ContactSelectContextType = {
  selectedId: string | null;
  selectedContact: IContact | null;
  setSelectedId: (id: string) => void;
  setSelectedContact: (contact: IContact) => void;
};

export const SelectContactContext = createContext<ContactSelectContextType | undefined>(undefined);

export const SelectContactProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);

  const selectId = (id: string) => {
    if (selectedId === id) {
      return setSelectedId(null);
    }

    return setSelectedId(id);
  };

  const selectContact = (contact: IContact) => {
    if (selectedContact?.id === contact.id) {
      return setSelectedContact(null);
    }

    return setSelectedContact(contact);
  };

  return (
    <SelectContactContext.Provider
      value={{
        selectedId,
        setSelectedId: selectId,
        setSelectedContact: selectContact,
        selectedContact,
      }}
    >
      {children}
    </SelectContactContext.Provider>
  );
};
