import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function CreateAlert() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        저장되었습니다
      </Alert>
    </Stack>
  );
}
