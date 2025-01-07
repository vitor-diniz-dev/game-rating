import { styled } from "@mui/material/styles";
import MuiRating, { RatingProps } from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(MuiRating)({
  "& .MuiRating-iconFilled": {
    color: "#ff4953",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export const Rating = ({ ...props }: RatingProps) => {
  return (
    <StyledRating
      name="customized-color"
      defaultValue={4}
      getLabelText={(value: number) =>
        `${value} Heart${value !== 1 ? "s" : ""}`
      }
      precision={0.5}
      icon={<FavoriteIcon fontSize="inherit" />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      {...props}
    />
  );
};
