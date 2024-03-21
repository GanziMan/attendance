"use client";

import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

import BasicLayout from "@/app/components/BasicLayout";
import ClassScheduleContainer from "@/app/components/Schedule";
import Paper from "@mui/material/Paper";
import ScheduleApiClient from "@/clients/ScheduleApiClient";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import { pushNotification } from "@/app/utils/notification";
import { useState } from "react";

interface RoasterData {
  name: string;
  age: string;
  mobileNumber: string;
  subMobileNumber: string;
  description: string;
  attendanceId: string;
}

const INITIAL_SCHEDULES: Record<string, boolean>[] = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

const Index = () => {
  const theme = useTheme();
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [roaster, setRoaster] = useState({
    name: "",
    age: "",
    mobileNumber: "",
    subMobileNumber: "",
    description: "",
    attendanceId: params.id,
  });

  const [schedules, setSchedules] = useState(INITIAL_SCHEDULES);

  // Hook
  const onChange = (field: string, value: string | any) => {
    setRoaster((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const fetchScheduleCreate = async (data: any) => {
    await ScheduleApiClient.getInstance().updateSchedule({
      attendanceId: data.data.attendanceId,
      attendeeId: data.data.id,
      day: "TUESDAY",
      time: "0930",
    });
  };

  const fetchRoasterCreate = async () => {
    const response = await ScheduleApiClient.getInstance().createRoaster(
      roaster
    );
    return response;
  };

  const { mutate: roasterCreate } = useMutation({
    mutationKey: ["roaster-list"],
    mutationFn: fetchRoasterCreate,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["roaster-list"]);
      fetchScheduleCreate(data);
      pushNotification("등록되었습니다.", "success");
      setIsCreate(false);
    },
    onError: () => {
      pushNotification("등록에 실패하였습니다.", "error");
      setIsCreate(false);
      setRoaster({
        name: "",
        age: "",
        mobileNumber: "",
        subMobileNumber: "",
        description: "33",
        attendanceId: params.id,
      });
    },
  });

  const { isLoading, data: roasterData } = useQuery({
    queryKey: ["roaster-list", params.id],
    queryFn: async () => {
      const response = await ScheduleApiClient.getInstance().getRoasterList(
        params.id
      );
      return response?.data[0];
    },
  });

  if (isLoading) return <CircularProgress color="inherit" />;

  const parsingPhoneNumber = (num: string) => {
    return (
      num
        .replace(/[^0-9]/g, "")
        /**
         *  0자리 부터 3자리까지 첫번째 '-' 전에 위치
         *  첫번째 '-'에서 0 자리부터 4자리까지 후에 '-' 위치
         *  마지막 '-'에서 4자리  숫자
         */
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        /**
         * '-'기호는 한번에서 두번만 적용
         */
        .replace(/(-{1,2})$/g, "")
        .slice(0, 13)
    );
  };
  return (
    <BasicLayout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={isSmallScreen ? 2 : 4}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width={"20%"}>이름</TableCell>
                <TableCell width={"20%"}>나이</TableCell>
                <TableCell width={"20%"}>휴대폰 번호</TableCell>
                <TableCell width={"20%"}>서브 휴대폰 번호</TableCell>
                <TableCell width={"20%"}>비고</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roasterData?.map((item: RoasterData, index: number) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    // router.push(`/attendancy/list/${item.id}`);
                  }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.age}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.mobileNumber}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.subMobileNumber}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.description}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                style={{ cursor: "pointer" }}
                hover
              >
                {isCreate ? (
                  <>
                    <TableCell component="th" scope="row">
                      <TextField
                        id="outlined-basic"
                        label="이름"
                        variant="outlined"
                        value={roaster?.name}
                        onChange={(e) => onChange("name", e.target.value)}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <TextField
                        id="outlined-basic"
                        label="나이"
                        variant="outlined"
                        value={roaster?.age}
                        onChange={(e) => onChange("age", e.target.value)}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <TextField
                        id="outlined-basic"
                        label="휴대폰 번호"
                        variant="outlined"
                        value={roaster?.mobileNumber}
                        onChange={(e) =>
                          onChange(
                            "mobileNumber",
                            parsingPhoneNumber(e.target.value)
                          )
                        }
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <TextField
                        id="outlined-basic"
                        label="서브 휴대폰 번호"
                        variant="outlined"
                        value={roaster?.subMobileNumber}
                        onChange={(e) =>
                          onChange("subMobileNumber", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setOpen(true);
                        }}
                        sx={{
                          height: "auto",
                          fontSize: "inherit",
                        }}
                      >
                        스케줄 지정
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <TableCell
                    component="th"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    colSpan={5}
                    onClick={() => setIsCreate(true)}
                  >
                    <p>학생 등록하기</p>
                  </TableCell>
                )}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth={false}
        >
          <ClassScheduleContainer
            setOpen={setOpen}
            schedules={schedules}
            setSchedules={setSchedules}
          />
        </Dialog>
        {isCreate ? (
          <div style={{ display: "flex", gap: "10px" }}>
            <Box mt={2}>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  setIsCreate(false);
                }}
              >
                취소
              </Button>
            </Box>
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  roasterCreate();
                }}
                disabled={Object.values(roaster).some(
                  (value) => value.trim() === ""
                )}
              >
                저장
              </Button>
            </Box>
          </div>
        ) : (
          <Box mt={2} display={"flex"} gap={"5px"}>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                pushNotification("삭제하실 명단을 선택해주세요.", "error");
              }}
            >
              삭제
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                router.back();
              }}
            >
              대시보드
            </Button>
          </Box>
        )}
      </Box>
    </BasicLayout>
  );
};

export default Index;

const BoxST = styled(Box)(({ theme }) => {
  return {
    padding: "24px 32px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      padding: "48px 40px",
    },
  };
});
