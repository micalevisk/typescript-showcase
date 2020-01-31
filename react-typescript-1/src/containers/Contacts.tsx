import React, { useState } from 'react';

import AddContactForm from '@components/AddContactForm';
import ContactItem from '@components/ContactItem';

import CONTACTS from '../contacts';
import Contact from '../models/Contact';
import * as S from './styles';

const Contacts = () => {
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [contacts, setContacts] = useState(CONTACTS);

  const handleRemoveContact = (contactIdToRemove: string) => {
    setContacts((currcontacts) => currcontacts
      .filter((contact) => contact.id !== contactIdToRemove));
  };

  const handleAddContact = (contact: Contact) => {
    setContacts((currContacts) => currContacts.concat(contact));
    setIsAddingContact(false);
  };

  return (
    <S.Wrapper>
      <S.Card>
        <header>
          {
            isAddingContact && <AddContactForm onAddContact={handleAddContact} />
          }
          <button onClick={() => setIsAddingContact(!isAddingContact)} type="button">Adicionar contato</button>
        </header>
        <S.ContactList>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onRemoveContact={handleRemoveContact}
            />
          ))}
        </S.ContactList>
      </S.Card>
    </S.Wrapper>
  );
};

export default Contacts;
