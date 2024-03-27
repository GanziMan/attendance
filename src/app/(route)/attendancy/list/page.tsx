"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import AttendancyApiClient from "@/clients/AttendancyApiClient";
import BasicLayout from "@/app/components/BasicLayout";
import CommonTable from "@/app/components/Table";

const Index = () => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { isLoading, data: attendancyList } = useQuery({
    queryKey: ["attendancy-list"],
    queryFn: async () => {
      const response =
        await AttendancyApiClient.getInstance().getAttendanceList();
      return response.data;
    },
  });

  const { data, hasNextPage } = useInfiniteQuery({
    queryKey: ["attendancy-list"],
    queryFn: async ({ pageParam }) =>
      await AttendancyApiClient.getInstance().getAttendanceList(),
  });

  return (
    <BasicLayout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={isSmallScreen ? 2 : 4}
      >
        {/* {attendancyPage?.data?.items.map((page, index) => {
          console.log(page);
          return;
        })} */}
        <CommonTable
          infoList={attendancyList}
          setIsCreate={setIsCreate}
          isCreate={isCreate}
          isLoading={isLoading}
        />
      </Box>
    </BasicLayout>
  );
};

export default Index;
