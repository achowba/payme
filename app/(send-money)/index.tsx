import ContactList from '@/components/send-money/ContactList';
import { COLORS } from '@/constants/colors.constants';
import { DEFAULT_STYLES } from '@/constants/styles.constants';
import { CONTACTS } from '@/data/contact.data';
import { useSelectContact } from '@/hooks/useContactSelect';
import { IContact } from '@/types';
import { Feather, Ionicons, Octicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const width = Dimensions.get('window').width;

const SelectContact = () => {
  const router = useRouter();

  const [searchText, setSearchText] = useState('');
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isLoadingContacts, setIsLoadingContacts] = useState(true);

  const { selectedContact } = useSelectContact();
  const isContactSelected = selectedContact !== null;

  const selectDestination = () => {
    if (!selectedContact) {
      alert('Please select a contact first.');
      return;
    }

    router.push(`/set-amount?contactId=${selectedContact.id}`);
  };

  useEffect(() => {
    // Simulate fetching contacts
    setTimeout(() => {
      setContacts(CONTACTS);
      setIsLoadingContacts(false);
    }, 3000);
  }, []);

  const searchContacts = (text: string) => {
    setSearchText(text);

    if (text?.trim() === '') {
      setContacts(CONTACTS);
      return;
    }

    const filtered = CONTACTS.filter((contact) =>
      contact.firstName.toLowerCase().includes(text.toLowerCase())
    );

    setContacts(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contactContainer}>
        <View style={styles.searchContainer}>
          <Octicons name="search" size={30} color="#FFFFFF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#444444"
            value={searchText}
            onChangeText={searchContacts}
          />
        </View>
        {isLoadingContacts ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <ContactList contacts={contacts} numberOfFrequentlyAccessedContactsToShow={4} />
        )}
      </View>
      <View style={styles.destinationsContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.destinationItemContainer,
            pressed && DEFAULT_STYLES.pressed,
            !isContactSelected && styles.disabledDestinationBtn,
          ]}
          onPress={selectDestination}
          disabled={!isContactSelected}
        >
          <View style={styles.destinationItem}>
            <Feather name="users" size={35} color="#FFFFFF" />
          </View>
          <Text style={styles.destinationText}>Send to Friend</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.destinationItemContainer,
            pressed && DEFAULT_STYLES.pressed,
            isContactSelected && styles.disabledDestinationBtn,
          ]}
          onPress={selectDestination}
          disabled={isContactSelected}
        >
          <View style={styles.destinationItem}>
            <Image
              style={styles.destinationImage}
              source={require('@/assets/images/icons/bank.png')}
            />
          </View>
          <Text style={styles.destinationText}>Send to Bank</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.destinationItemContainer,
            pressed && DEFAULT_STYLES.pressed,
            isContactSelected && styles.disabledDestinationBtn,
          ]}
          onPress={selectDestination}
          disabled={isContactSelected}
        >
          <View style={styles.destinationItem}>
            <Ionicons name="scan" size={40} color="#FFFFFF" />
          </View>
          <Text style={styles.destinationText}>Scan</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    paddingTop: 10,
  },
  contactContainer: {
    backgroundColor: COLORS.dark.secondary,
    borderRadius: 30,
    marginBottom: 20,
    padding: 10,
  },
  searchContainer: {
    alignItems: 'center',
    backgroundColor: '#292929',
    borderRadius: 25,
    flexDirection: 'row',
    marginBottom: 15,
    padding: 12,
  },
  searchInput: {
    color: COLORS.dark.text,
    flex: 1,
    fontSize: 20,
    marginLeft: 15,
  },
  loadingContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 70,
  },
  destinationsContainer: {
    backgroundColor: COLORS.dark.secondary,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    paddingVertical: 35,
  },
  destinationItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  destinationItem: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: '#2A2A2A',
    borderRadius: 100,
    justifyContent: 'center',
    marginBottom: 10,
    width: (width - 160) / 3,
  },
  destinationText: {
    color: COLORS.dark.text,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 5,
    textAlign: 'center',
  },
  destinationImage: {
    aspectRatio: 1,
    width: '40%',
  },
  disabledDestinationBtn: {
    opacity: 0.5,
  },
});

export default SelectContact;
