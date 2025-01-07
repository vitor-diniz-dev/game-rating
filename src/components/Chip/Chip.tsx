import { ChipProps, Chip as MuiChip } from "@mui/material";

export const Chip = ({ ...props }: ChipProps) => (
  <MuiChip className="m-0.5" variant="outlined" {...props} />
);
