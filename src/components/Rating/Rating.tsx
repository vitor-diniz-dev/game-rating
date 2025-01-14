import MuiRating, { RatingProps } from "@mui/material/Rating";

export const Rating = ({ ...props }: RatingProps) => {
  return (
    <MuiRating
      name="game-rating"
      getLabelText={(value: number) => `${value} Star${value !== 1 ? "s" : ""}`}
      precision={0.5}
      {...props}
    />
  );
};
