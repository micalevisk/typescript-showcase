import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

const getRandomURL = () => fetch('https://picsum.photos/200').then((res) => res.url);

interface FakeAPIPost {
  id: number
  title: string
  userId: number
  body: string
}

type Post = FakeAPIPost & {
  thumbnailUrl: string
}

type Posts = Array<Post>

export default function Dashboard() {
  const [spots, setSpots] = useState<Posts>([]);

  useEffect(() => { // Like componentDidMound
    async function loadSpots() {
      const userId = localStorage.getItem('user:id');
      if (userId) {
        const whenRandomURL = getRandomURL();

        const normalizedUserId = (parseInt(userId, 10) % 100) + 1; // number between 1 and 100
        const res = await api.get<FakeAPIPost[]>('/posts', {
          params: {
            userId: normalizedUserId,
          },
        });
        const thumbnailUrl = await whenRandomURL;
        setSpots(
          res.data.map((spot) => ({ ...spot, thumbnailUrl })),
        );
      }
    }
    loadSpots();
  }, []);

  return (
    <>
      <ul className="spot-list">
        {spots.map((spot) => (
          <li key={spot.id}>
            <header style={{
              backgroundImage: `url(${spot.thumbnailUrl})`,
            }}
            />
            <strong>{spot.title}</strong>
            <span>{spot.userId ? `R$${spot.userId}/dia` : 'GRATUITO'}</span>
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button className="btn" type="button">Cadastrar novo spot</button>
      </Link>
    </>
  );
}
