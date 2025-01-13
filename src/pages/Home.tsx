import { useEffect } from "react";
import { GameCard } from "../components/GameCard/GameCard";
import { api } from "../api";

export const Home = () => {
  const loadGames = () => {
    api.post("games").then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <>
      <GameCard />
    </>
  );
};
