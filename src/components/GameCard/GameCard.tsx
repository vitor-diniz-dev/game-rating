import { Skeleton } from "@mui/material";
import { useState } from "react";
// import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { Rating } from "../Rating/Rating";

const HoverDetails = () => {
  return (
    <div className="flex items-end absolute top-0 h-full w-full bg-gradient-to-t from-gray-800 text-white">
      <div className="w-full text-left py-2 px-3">
        <h1 className="text-xl">Marvel Rivals</h1>
        <div>
          <h2 className="block text-sm">Your rating</h2>
          <Rating
            emptyIcon={
              <FavoriteBorderIcon fontSize="inherit" className="text-white" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export const GameCard = ({ isLoading = false }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return isLoading ? (
    <Skeleton
      variant="rectangular"
      width={265}
      height={350}
      className="cursor-progress"
    />
  ) : (
    <div>
      <button
        className="relative shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate("game/1")}
      >
        <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co94j3.jpg" />
        {isHovered && <HoverDetails />}
      </button>
      <div>
        <Rating readOnly />
      </div>
    </div>
  );
};
