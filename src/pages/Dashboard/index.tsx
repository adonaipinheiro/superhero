import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

// Styles
import { Container, Title, Author, Form } from './styles';

// Components
import HerosList from '../../components/HeroesList';

interface HeroesList {
  id: string;
  name: string;
  image: {
    url: string;
  };
  biography: {
    publisher: string;
  };
}

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState('');
  const [heroes, setHeroes] = useState<HeroesList[]>([]);

  function handleSearch(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    api.searchHeroes(`${search}`).then((r) => {
      if (r.data.response === 'success') {
        setHeroes(r.data.results);
      } else {
        setHeroes([]);
      }
    });
  }

  return (
    <Container hasSearch={heroes.length > 0}>
      <Author>por Adonai Pinheiro</Author>
      <Title>Busca por heróis</Title>
      <Form onSubmit={handleSearch}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquisar herói"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <HerosList data={heroes} />
    </Container>
  );
};

export default Dashboard;
