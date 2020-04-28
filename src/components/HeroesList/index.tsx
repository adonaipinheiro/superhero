import React from 'react';

import { Container, HeroCard } from './styles';

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

interface ComponentProps {
  data: Array<HeroesList>;
}

const HeroesList: React.FC<ComponentProps> = ({ data }: ComponentProps) => {
  return (
    <Container>
      {data.map((hero) => (
        <HeroCard to={`heroes/${hero.name}`} key={hero.id}>
          <img src={hero.image.url} alt="teste" width={150} />
          <div>
            <strong>{hero.name}</strong>
            <p>{hero.biography.publisher}</p>
          </div>
        </HeroCard>
      ))}
    </Container>
  );
};

HeroesList.defaultProps = {
  data: [],
};

export default HeroesList;
