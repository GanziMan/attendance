"use client";

import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import AuthApiClient from "@/clients/AuthApiClient";
import axios from "axios";
import { pushNotification } from "./utils/notification";
import { setTokens } from "@/libs/client/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export interface Login {
  username: string;
  password: string;
}

const index = () => {
  const router = useRouter();
  const [sessionLoading, setSessionLoading] = useState<boolean>(false);
  const [login, setLogin] = useState<Login>({
    username: "",
    password: "",
  });

  const fetchLogin = async (params: Login) => {
    const { username, password } = params;

    try {
      const response = await AuthApiClient.getInstance().userLogin({
        username: username,
        password: password,
      });

      const token = response.data.data!.accessToken;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setTokens({
        accessToken: response.data.data!.accessToken,
        refreshToken: response.data.data!.refreshToken,
      });

      // 로그인 성공 시 반환
      return response;
    } catch (error) {
      //
      // 오류 처리
      console.error("Error occurred during login:", error);
      throw error;
    }
  };

  const { mutate, isLoading } = useMutation(fetchLogin, {
    onSuccess: () => {
      pushNotification("로그인 되었습니다.", "success");
      router.push("/attendancy/list");
    },
    onError: () => {
      pushNotification(
        "존재하지 않는 계정이거나 비밀번호가 다릅니다.",
        "error"
      );
    },
  });

  // Hook
  const onChange = (field: string, value: string) => {
    setLogin((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  if (isLoading || sessionLoading) {
    return <CircularProgress color="inherit" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar> */}
        <Typography component="h1" variant="h5">
          체쿠리
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            value={login?.username}
            // disabled={isUpdate ? false : true}
            fullWidth
            label="아이디"
            onChange={(e) => onChange("username", e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => onChange("password", e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              mutate(login);
            }}
          >
            로그인
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default index;
