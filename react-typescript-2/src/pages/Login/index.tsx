import React, { useState, FormEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import api from '../../services/api';

type Props = RouteComponentProps;

export default function Login({ history }: Props) {
  const [email, setEmail] = useState('abc@foo.com');
  const [fetching, setFetching] = useState(false);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!localStorage.getItem('user:id')) {
      setFetching(true);
      const res = await api.post('/posts', { email });
      setFetching(false);
      const { id: userId } = res.data;

      localStorage.setItem('user:id', userId);
    }

    history.push('/dashboard');
  };

  return (
    <>
      <p>
Ofereça
        {' '}
        <strong>spots</strong>
        {' '}
para programadores e encontre
        {' '}
        <strong>talentos</strong>
        {' '}
para a sua empresa.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="xxemail">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu melhor e-mail"
          onChange={(evt) => setEmail(evt.target.value)}
          value={email}
        />
        <button
          type="submit"
          className="btn"
          disabled={fetching}
        >
Entrar

        </button>
      </form>
    </>
  );
}
