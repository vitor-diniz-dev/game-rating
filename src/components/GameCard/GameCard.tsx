import { styled } from "@mui/material";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const HoverDetails = () => {
  return (
    <div className="flex items-end absolute top-0 h-full w-full bg-gradient-to-t from-gray-800 text-white">
      <div className="w-full text-left py-2 px-3">
        <h1 className="text-lg">Marvel Rivals</h1>
        <div>
          <StyledRating
            name="customized-color"
            defaultValue={4}
            getLabelText={(value: number) =>
              `${value} Heart${value !== 1 ? "s" : ""}`
            }
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={
              <FavoriteBorderIcon fontSize="inherit" className="text-white" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export const GameCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co94j3.jpg" />
        {isHovered && <HoverDetails />}
      </button>
    </div>
  );
};
