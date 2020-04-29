import api from './apiConnection';

interface HeroProperty {
  id: number;
  image: {
    url: string;
  };
  name: string;
  powerstats: {
    combat: string;
    durability: string;
    intelligence: string;
    power: string;
    speed: string;
    strength: string;
  };
}

class Api {
  async listHeroProperties(id: string): Promise<HeroProperty> {
    const hero = await api.get(id);

    return hero.data;
  }

  async searchHeroes(name: string): Promise<any> {
    const foundHeroes = await api.get(`search/${name}`);

    return foundHeroes;
  }
}

export default new Api();
