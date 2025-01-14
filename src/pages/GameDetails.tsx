import { useParams } from "react-router-dom";
import { Chip } from "../components/Chip/Chip";
import { Rating } from "../components/Rating/Rating";
import { useEffect, useState } from "react";
import { Game, getGameDetails } from "../services/gameService";
import { Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { GameCover } from "../components/Cover/Cover";
import { normalizeRating } from "../utils/rating";

const timestampToDate = (timestamp?: number) => {
  if (!timestamp) return "Data não definida";
  return new Date(timestamp * 1000).toLocaleDateString("pt-BR", {
    year: "numeric", // Ano com 4 dígitos
    month: "short", // Nome completo do mês
    day: "numeric", // Dia do mês
  });
};

export const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState<Game | null>();

  const loadGameDetails = () => {
    getGameDetails(Number(id)).then((game) => {
      console.log("Game", game);
      setGame(game);
    });
  };

  useEffect(() => {
    loadGameDetails();
  }, []);

  return (
    <Grid container columnSpacing={5} columns={14}>
      <Grid size="auto">
        {game ? (
          <>
            <GameCover coverId={game.cover} />
            <Rating value={normalizeRating(game.rating)} />
          </>
        ) : (
          <Skeleton variant="rectangular" width={228} height={337} />
        )}
      </Grid>
      <Grid size="grow">
        {game ? (
          <>
            <h2 className="text-4xl">{game.name}</h2>
            <p className="italic">
              Released on: {timestampToDate(game.first_release_date)}
            </p>
            <p className="mt-4">{game.storyline}</p>
          </>
        ) : (
          <Skeleton variant="rectangular" width="100%" height={400} />
        )}
      </Grid>
      <Grid size={2}>
        {game ? (
          <>
            <div className="border rounded-md px-7 py-5 text-center mb-4">
              <h3>Your Rating</h3>
              <Rating size="large" />
            </div>
            <div className="mb-2">
              <h3>Platforms</h3>
              <Grid container spacing={0.5}>
                {game.platforms?.map(({ id, name }) => (
                  <Grid>
                    <Chip key={id} label={name} />
                  </Grid>
                ))}
              </Grid>
            </div>
            <div>
              <h3>Genres</h3>
              <Grid container spacing={0.5}>
                {game.genres?.map(({ id, name }) => (
                  <Grid>
                    <Chip key={id} label={name} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </>
        ) : (
          <Skeleton variant="rectangular" width={270} height={400} />
        )}
      </Grid>
    </Grid>
  );
};
