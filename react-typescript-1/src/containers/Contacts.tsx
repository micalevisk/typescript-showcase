import React, { useState } from 'react';
import styled from 'styled-components';

import ContactItem from '../components/ContactItem';
import CONTACTS from '../contacts';
import AddContactForm from '../components/AddContactForm';
import Contact from '../models/Contact';

const Wrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 768px;
  padding: 16px;
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
`;

const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

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
    <Wrapper>
      <Card>
        <header>
          {
            isAddingContact && <AddContactForm onAddContact={handleAddContact}/>
          }
          <button onClick={() => setIsAddingContact(!isAddingContact)}>Adicionar contato</button>
        </header>
        <ContactList>
          {contacts.map(contact =>
            <ContactItem key={contact.id} contact={contact} onRemoveContact={handleRemoveContact} />
          )}
        </ContactList>
      </Card>
    </Wrapper>
  );
};

export default Contacts;
