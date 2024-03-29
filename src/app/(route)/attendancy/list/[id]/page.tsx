"use client";

import "dayjs/locale/ko"; // 한국어 locale 설정

import { API_BASE_URL, accessToken } from "@/app/utils/common";
import { Box, Button, CircularProgress } from "@mui/material";
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import AttendancyApiClient from "@/clients/AttendancyApiClient";
import BasicLayout from "@/app/components/BasicLayout";
import { GetServerSideProps } from "next";
import { LoadingComponent } from "@/app/components/Loading";
import Paper from "@mui/material/Paper";
import RecordApiClient from "@/clients/RecordApiClient";
// Component
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import dayjs from "dayjs";
import { pushNotification } from "@/app/utils/notification";

interface DateFormat {
  dateFormat: {
    date: string;
    day: string;
  };
}
function getFormattedDate(): DateFormat {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const day: number = today.getDate();

  // 월과 일이 한 자리 숫자인 경우 앞에 0을 붙여 두 자리로 만듭니다.
  const formattedMonth: string = month < 10 ? "0" + month : month.toString();
  const formattedDay: string = day < 10 ? "0" + day : day.toString();

  // 요일 가져오기
  const dayOfWeek: number = today.getDay();
  const daysOfWeek: string[] = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const formattedDayOfWeek: string = daysOfWeek[dayOfWeek];

  return {
    dateFormat: {
      date: `${year}-${formattedMonth}-${formattedDay}`,
      day: formattedDayOfWeek,
    },
  };
}

function formatTime(time: string): string {
  const hour: string = time.substring(0, 2);
  const minute: string = time.substring(2);

  return `${hour}시 ${minute}분`;
}

const koreanDaysOfWeek: Record<string, string> = {
  SUNDAY: "일요일",
  MONDAY: "월요일",
  TUESDAY: "화요일",
  WEDNESDAY: "수요일",
  THURSDAY: "목요일",
  FRIDAY: "금요일",
  SATURDAY: "토요일",
};

const index = () => {
  const router = useRouter();
  const params = useParams<{ id: string; description: string }>();
  const todayFormatted: DateFormat = getFormattedDate();
  const queryClient = useQueryClient();
  const today = dayjs();
  const [isClient, setIsClient] = useState(false);
  // 오늘의 날짜를 지정된 형식으로 포맷팅
  const todayFormat = today.format("YYYY년 MM월 DD일 (ddd)");

  const { data, isLoading } = useQuery({
    queryKey: ["dashboard-data"],
    queryFn: async () => {
      const response =
        await AttendancyApiClient.getInstance().getAttendanceDetailList(
          params.id
        );
      return response?.data;
    },
  });

  const fetchRecord = async (attendeeId: string) =>
    await RecordApiClient.getInstance().fetchRecord({
      attendanceId: params.id,
      status: "Present",
      attendeeId: attendeeId,
      date: todayFormatted.dateFormat.date,
      day: todayFormatted.dateFormat.day,
      lateReason: "",
    });

  const fetchAllRecord = async () => {
    await RecordApiClient.getInstance().fetchAllRecord({
      attendanceId: params.id,
      status: "Present",
      date: new Date(todayFormatted.dateFormat.date),
      day: todayFormatted.dateFormat.day,
      lateReason: "",
    });
  };

  const { mutate: recordMutate } = useMutation(fetchRecord, {
    onSuccess: () => {
      pushNotification("출석하였습니다.", "success");
      queryClient.invalidateQueries(["dashboard-data"]);
    },
    onError: () => {
      pushNotification("오류 관리자에게 문의하세요.", "error");
    },
  });

  const { mutate: recordAllMutate } = useMutation(fetchAllRecord, {
    onSuccess: () => {
      pushNotification("출석하였습니다.", "success");
      queryClient.invalidateQueries(["dashboard-data"]);
    },
    onError: () => {
      pushNotification("오류 관리자에게 문의하세요.", "error");
    },
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <BasicLayout>
      {isClient ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody></TableBody>
            </Table>
          </TableContainer>
          <br />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={5}>
                    교회1 충무교회 청년부 주말 30
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" colSpan={5}>
                    {todayFormat} 출석 대상자 {data?.length}명
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">이름</TableCell>
                  <TableCell align="center">출석 상태</TableCell>
                  <TableCell align="center">지각</TableCell>
                  <TableCell align="center">등원시간</TableCell>
                  <TableCell align="center">비고</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data ? (
                  data?.items.map((item: any) => (
                    <TableRow
                      key={item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      hover
                      style={{ cursor: "pointer" }}
                    >
                      <TableCell component="th" align="center" scope="row">
                        {item.id}
                      </TableCell>
                      <TableCell
                        component="th"
                        align="center"
                        scope="row"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => recordMutate(data.attendeeId)}
                        >
                          출석
                        </Button>
                        <Button
                          variant="outlined"
                          color="warning"
                          onClick={() => recordMutate(data.attendeeId)}
                        >
                          지각
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => recordMutate(data.attendeeId)}
                        >
                          결석
                        </Button>
                      </TableCell>
                      <TableCell align="center">{item.email}</TableCell>
                      <TableCell align="center">
                        {koreanDaysOfWeek[item.day] || "" + " "}
                        {formatTime(item.time)}
                      </TableCell>
                      <TableCell align="center">비고</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableCell align="center" colSpan={5}>
                    {LoadingComponent(isLoading) ||
                      "조회된 데이터가 없습니다. "}
                  </TableCell>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : null}
      <Box mt={2} display={"flex"} justifyContent={"space-between"}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            recordAllMutate();
          }}
        >
          전원 출석
        </Button>
        <Button variant="contained" color="primary" onClick={() => {}}>
          출석 통계
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            router.push(`/attendancy/roaster-management/${params.id}`);
          }}
        >
          명단 관리
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            router.push("/attendancy/settings");
          }}
        >
          출석부 설정
        </Button>
      </Box>
    </BasicLayout>
  );
};

export default index;

// SSR DataPrefetch 기능
export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const id = context.params!.id as string;

  console.log(id);
  // await queryClient.prefetchQuery([""],id), () =>
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
