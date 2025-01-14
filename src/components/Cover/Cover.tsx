import { useCallback, useEffect, useState } from "react";
import { api } from "../../api";
import { Skeleton } from "@mui/material";

export const GameCover = ({ coverId }: { coverId: number }) => {
  const [url, setUrl] = useState("");

  const getGameCover = useCallback(() => {
    api
      .post("covers", `fields image_id; where id = ${coverId};`)
      .then(({ data }) => {
        console.log(data);
        setUrl(
          `https://images.igdb.com/igdb/image/upload/t_cover_big/${data[0].image_id}.jpg`
        );
      });
  }, [coverId]);

  useEffect(() => {
    getGameCover();
  }, [getGameCover]);

  return url ? (
    <img src={url} />
  ) : (
    <Skeleton
      variant="rectangular"
      width={228}
      height={305}
      className="cursor-progress"
    />
  );
};
