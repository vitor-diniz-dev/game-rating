import { api } from ".";

export const fetchHypedGames = () =>
  api.post("games", "fields name, cover, rating; limit 10; sort hypes desc;");
export const fetchRecentGames = () =>
  api.post(
    "games",
    "fields name, cover, rating; limit 10; sort first_release_date desc;"
  );

export const fetchGameDetails = (id: number) =>
  api.post(
    "games",
    `fields name, cover, rating, storyline, first_release_date, platforms.name, genres.name; where id = ${id};`
  );
