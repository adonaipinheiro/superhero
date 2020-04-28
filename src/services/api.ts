import api from './apiConnection';

interface HeroesData {
  data: {
    response: string;
  };
}

class Api {
  async listHeroes(id: string): Promise<any> {
    const hero = await api.get(id);

    return hero;
  }

  async searchHeroes(name: string): Promise<any> {
    const foundHeroes = await api.get(`search/${name}`);

    return foundHeroes;
  }
}

export default new Api();
