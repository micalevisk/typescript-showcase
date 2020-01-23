import React, { useState, FormEvent } from 'react';
import uuid from 'uuid';

import Contact from '../models/Contact';

type Props = {
  onAddContact: (contact: Contact) => void
};

const AddContactForm = ({ onAddContact }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onAddContact({
      id: uuid(),
      name,
      email,
      phoneNumber,
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="input-name">Nome</label>
        <input
          type="text"
          id="input-name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </div>

      <div>
        <label htmlFor="input-email">E-mail</label>
        <input
          type="email"
          id="input-email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </div>

      <div>
        <label htmlFor="input-phoneNumber">Telefone</label>
        <input
          type="text"
          id="input-phoneNumber"
          value={phoneNumber}
          onChange={(evt) => setPhoneNumber(evt.target.value)}
        />
      </div>

      <button type="submit">Criar contato</button>
    </form>
  );
};

export default AddContactForm;
