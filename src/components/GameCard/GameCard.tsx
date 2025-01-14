import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "../Rating/Rating";
import { GameCover } from "../Cover/Cover";
import StarIcon from "@mui/icons-material/Star";
import { Game } from "../../services/gameService";
import { normalizeRating } from "../../utils/rating";

const hoverDetails = (name: string) => {
  return (
    <div className="flex items-end absolute top-0 h-full w-full bg-gradient-to-t from-gray-800 text-white">
      <div className="w-full text-left py-2 px-3">
        <h1 className="text-xl">{name}</h1>
        <div>
          <h2 className="block text-sm">Your rating</h2>
          <Rating emptyIcon={<StarIcon className="text-white" />} />
        </div>
      </div>
    </div>
  );
};

export const GameCard = ({ name, rating, cover, id }: Game) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button
        className="relative shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(`game/${id}`)}
      >
        <GameCover coverId={cover} />
        {isHovered && hoverDetails(name)}
      </button>
      <div>
        <Rating readOnly value={normalizeRating(rating)} />
      </div>
    </div>
  );
};
