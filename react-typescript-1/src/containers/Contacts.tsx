import React, { useState } from 'react';
import * as S from './styles';
import ContactItem from '../components/ContactItem';
import CONTACTS from '../contacts';
import AddContactForm from '../components/AddContactForm';
import Contact from '../models/Contact';

const Contacts = () => {
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [contacts, setContacts] = useState(CONTACTS);

  const handleRemoveContact = (contactIdToRemove: string) => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactIdToRemove)
    );
  };

  const handleAddContact = (contact: Contact) => {
    setContacts(contacts => contacts.concat(contact));
    setIsAddingContact(false);
  };

  return (
    <S.Wrapper>
      <S.Card>
        <header>
          {
            isAddingContact && <AddContactForm onAddContact={handleAddContact}/>
          }
          <button onClick={() => setIsAddingContact(!isAddingContact)}>Adicionar contato</button>
        </header>
        <S.ContactList>
          {contacts.map(contact =>
            <ContactItem key={contact.id} contact={contact} onRemoveContact={handleRemoveContact} />
          )}
        </S.ContactList>
      </S.Card>
    </S.Wrapper>
  );
};

export default Contacts;
