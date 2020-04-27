import React from 'react';

import { Container, Title, Author, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Author>por Adonai Pinheiro</Author>
      <Title>Busca por heróis</Title>
      <Form>
        <input type="text" placeholder="Pesquisar herói" />
        <button type="submit">Pesquisar</button>
      </Form>
    </Container>
  );
};

export default Dashboard;
