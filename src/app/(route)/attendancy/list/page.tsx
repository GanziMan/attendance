"use client";

import { Box, CircularProgress, useMediaQuery, useTheme } from "@mui/material";

import AttendancyApiClient from "@/clients/AttendancyApiClient";
import BasicLayout from "@/app/components/BasicLayout";
import CommonTable from "@/app/components/Table";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Index = () => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { isLoading, data } = useQuery({
    queryKey: ["attendancy-list"],
    queryFn: async () => {
      const response =
        await AttendancyApiClient.getInstance().getAttendanceList();
      return response.data;
    },
  });
  if (isLoading) return <CircularProgress color="inherit" />;

  return (
    <BasicLayout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={isSmallScreen ? 2 : 4}
      >
        <CommonTable
          infoList={data}
          setIsCreate={setIsCreate}
          isCreate={isCreate}
        />
      </Box>
    </BasicLayout>
  );
};

export default Index;
