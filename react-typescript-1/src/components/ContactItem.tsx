import React from 'react';
import styled from 'styled-components';
import Contact from '../models/Contact';

type Props = {
  contact: Contact
  onRemoveContact: (id: string) => void
};

const Card = styled.li`
  border-radius: 20px;
  background-color: #ccc;

  padding: 16px;
  & + & {
    margin-top: 16px;
  }
`;

const ContactItem = ({ contact, onRemoveContact }: Props) => (
  <Card>
    <p>Nome: {contact.name}</p>
    <p>Endereço de e-mail: {contact.email}</p>
    <p>Telefone pra contato: {contact.phoneNumber}</p>
    <button onClick={() => onRemoveContact(contact.id)}>Excluir</button>
  </Card>
);

export default ContactItem;
