import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import api from '../../services/api';

interface HeroParam {
  state: {
    idHero: string;
  };
}

const Heroes: React.FC = () => {
  const location: HeroParam = useLocation();
  const [name, setName] = useState('Heroes');
  const history = useHistory();

  const handleHeroProperties = (id: string): void => {
    api.listHeroProperties(id).then((r) => {
      console.log(r);
      setName(r.name);
    });
  };

  useEffect(() => {
    if (location.state === undefined) {
      history.push('/');
    } else {
      handleHeroProperties(location.state.idHero);
    }
  }, [location, history]);

  return <h1>{name}</h1>;
};

export default Heroes;
