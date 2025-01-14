import { ChipProps, Chip as MuiChip } from "@mui/material";

export const Chip = ({ ...props }: ChipProps) => (
  <MuiChip variant="outlined" {...props} />
);
