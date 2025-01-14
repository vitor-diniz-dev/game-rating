import { useEffect, useState } from "react";
import { GameCard } from "../components/GameCard/GameCard";
import { Game, getHypedGames, getRecentGames } from "../services/gameService";
import { Skeleton } from "@mui/material";

export const Home = () => {
  const [hypedGames, setHypedGames] = useState<Game[]>([]);
  const [recentGames, setRecentGames] = useState<Game[]>([]);

  const loadGames = () => {
    getHypedGames().then((games) => {
      setHypedGames(games);
    });
    getRecentGames().then((games) => {
      setRecentGames(games);
    });
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <>
      <section>
        <h2 className="text-2xl mb-4">Hyped Games</h2>
        {!hypedGames.length ? (
          <Skeleton variant="rectangular" width="100%" height={340} />
        ) : (
          <div className="flex gap-2">
            {hypedGames.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                name={game.name}
                rating={game.rating}
                cover={game.cover}
              />
            ))}
          </div>
        )}
      </section>
      <section>
        <h2 className="text-2xl mb-4">Recent Games</h2>
        {!recentGames.length ? (
          <Skeleton variant="rectangular" width="100%" height={340} />
        ) : (
          <div className="flex gap-2">
            {recentGames.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                name={game.name}
                rating={game.rating}
                cover={game.cover}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};
