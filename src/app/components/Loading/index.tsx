import { CircularProgress } from "@mui/material";

export function LoadingComponent(isLoading: boolean) {
  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }
}
