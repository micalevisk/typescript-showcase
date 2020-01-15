import React, { useState, useMemo, FormEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import camera from '../../assets/camera.svg';
import api from '../../services/api';

import './styles.css';

type Props = RouteComponentProps;

export default function New({ history }: Props) {
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState<File|null>(null);

  const preview = useMemo(() => (thumbnail ? URL.createObjectURL(thumbnail) : null), [thumbnail]);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const userId = localStorage.getItem('user:id');

    const data = new FormData();
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);
    data.append('thumbnail', thumbnail || '');

    await api.post('/posts', data, {
      headers: { userId },
    });

    history.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={preview ? 'has-thumbnail' : ''}
      >
        <input type="file" onChange={(evt) => setThumbnail(evt.target.files && evt.target.files[0])} />
        <img src={camera} alt="Selecionar a imagem" />
      </label>

      <label htmlFor="company">EMPRESA</label>
      <input
        type="text"
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={(evt) => setCompany(evt.target.value)}
      />

      <label htmlFor="techs">TECNOLOGIAS</label>
      <input
        type="text"
        id="techs"
        placeholder="Quais tecnologias usam"
        value={techs}
        onChange={(evt) => setTechs(evt.target.value)}
      />

      <label htmlFor="price">VALOR DA DIÁRIA</label>
      <input
        type="text"
        id="price"
        placeholder="Valor cobrado"
        value={price}
        onChange={(evt) => setPrice(evt.target.value)}
      />

      <button type="submit" className="btn">Cadastrar</button>
    </form>
  );
}
