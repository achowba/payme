import { IContact } from '@/types';
import { getRandomElementsFromArray } from '@/utils/array.utils';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import SendMoneyContactItem from './ContactItem';

type ContactListProps = {
  contacts: IContact[];
  numberOfFrequentlyAccessedContactsToShow?: number;
};

const width = Dimensions.get('window').width;

const ContactList = ({
  contacts,
  numberOfFrequentlyAccessedContactsToShow = 4,
}: ContactListProps) => {
  const recentlyAccessedContacts = getRandomElementsFromArray(
    contacts,
    numberOfFrequentlyAccessedContactsToShow
  );

  const gap = numberOfFrequentlyAccessedContactsToShow > 2 ? 10 : 5;
  const justifyContent = contacts.length > 3 ? 'space-between' : 'flex-start';
  const itemSpacing = numberOfFrequentlyAccessedContactsToShow > 1 ? 70 : 20;
  const contactWidth = (width - itemSpacing) / numberOfFrequentlyAccessedContactsToShow;

  return (
    <View style={[styles.container, { gap, justifyContent }]}>
      {recentlyAccessedContacts.map((contact, index) => (
        <View style={[styles.contactItemContainer, { width: contactWidth }]} key={contact.id}>
          <SendMoneyContactItem contact={contact} index={index} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    justifyContent: 'space-between',
  },
  contactItemContainer: {
    marginBottom: 20,
  },
});

export default ContactList;
