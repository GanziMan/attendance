"use client";

import { Box, Button, CircularProgress, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

import AuthApiClient from "@/clients/AuthApiClient";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export interface Register {
  username: string;
  password: string;
  name: string;
  mobileNumber: string;
  birthday: string;
  email: string;
}

const index = () => {
  const router = useRouter();
  const [register, setRegister] = useState<Register>();

  const onChange = (field: keyof Register, value: string) => {
    setRegister((prevState) => ({
      ...prevState!,
      [field]: value,
    }));
  };
  const { mutate: siginUpMutation, isLoading } = useMutation({
    mutationKey: [""],
    mutationFn: () => AuthApiClient.getInstance().userRegister(register!),
  });

  if (isLoading) return <CircularProgress color="inherit" />;

  return (
    <div style={{ width: "500px" }}>
      <Box alignContent={"center"}>
        <Grid container spacing={1} alignItems={"center"}>
          <Grid item xs={5}>
            <div>이름</div>
          </Grid>
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              value={register?.name}
              fullWidth
              label={"이름"}
              onChange={(e) => onChange("name", e.target.value)}
            />
          </Grid>

          <Grid item xs={5}>
            <div>ID</div>
          </Grid>
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              value={register?.username}
              fullWidth
              label={"ID"}
              onChange={(e) => onChange("username", e.target.value)}
            />
          </Grid>
          <Grid item xs={5}>
            <div>Email</div>
          </Grid>
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              value={register?.email}
              fullWidth
              label={"Email"}
              onChange={(e) => onChange("email", e.target.value)}
            />
          </Grid>

          <Grid item xs={5}>
            <div>PW</div>
          </Grid>
          <Grid item xs={7}>
            <TextField
              type="password"
              variant="outlined"
              value={register?.password}
              fullWidth
              label={"PW"}
              onChange={(e) => onChange("password", e.target.value)}
            />
          </Grid>
          <Grid item xs={5}>
            <div>Phone</div>
          </Grid>
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              value={register?.mobileNumber}
              fullWidth
              label={"Tel_no"}
              onChange={(e) => onChange("mobileNumber", e.target.value)}
            />
          </Grid>
          <Grid item xs={5}>
            <div>Birthday</div>
          </Grid>
          <Grid item xs={7}></Grid>
          {/* <Grid item xs={5}>
            <div>Gender</div>
          </Grid>
          <Grid item xs={7}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => onChange("sex", e.target.value)}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="여성"
              />
              <FormControlLabel value="male" control={<Radio />} label="남성" />
              <FormControlLabel
                value="gay"
                control={<Radio />}
                label="동성애자"
              />
            </RadioGroup>
          </Grid> */}
        </Grid>
        <Box mt={3} display={"flex"} justifyContent={"flex-end"} gap={"5px"}>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              router.push("/");
            }}
          >
            취소
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              siginUpMutation();
            }}
          >
            저장
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default index;
