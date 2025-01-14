import {
  fetchGameDetails,
  fetchHypedGames,
  fetchRecentGames,
} from "../api/games";

export interface Game {
  id: number;
  name: string;
  cover: number;
  rating: number;
  storyline?: string;
  first_release_date?: number;
  platforms?: { id: number; name: string }[];
  genres?: { id: number; name: string }[];
}

export const getHypedGames: () => Promise<Game[]> = async () => {
  try {
    const response = await fetchHypedGames();
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar jogos:", error);
    throw error;
  }
};

export const getRecentGames: () => Promise<Game[]> = async () => {
  try {
    const response = await fetchRecentGames();
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar jogos:", error);
    throw error;
  }
};

export const getGameDetails: (id: number) => Promise<Game> = async (id) => {
  try {
    const response = await fetchGameDetails(id);
    return response.data[0];
  } catch (error) {
    console.error("Erro ao buscar jogo:", error);
    throw error;
  }
};
