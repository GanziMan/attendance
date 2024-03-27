import { API_BASE_URL, accessToken } from "@/app/utils/common";
import {
  Button,
  CircularProgress,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
// Libraries
import React, { useState } from "react";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import AddIcon from "@mui/icons-material/Add";
import Cookies from "js-cookie";
import Paper from "@mui/material/Paper";
// Component
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { pushNotification } from "@/app/utils/notification";
import { useRouter } from "next/navigation";

interface Info {
  attendanceId: number;
  name: string;
  email: string;
  password: string;
  attendance: {
    title: string;
    description: string;
    type: string;
  };
}

interface listCreate {
  title: string; // 이름
  description: string; // 출석 상태
  type: string; // 지각
}

export interface CommonTableProps {
  infoList: any;
  isCreate: boolean;
  isLoading: boolean;
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommonTable: React.FC<CommonTableProps> = ({
  infoList,
  isCreate,
  setIsCreate,
  isLoading,
}) => {
  const queryClinet = useQueryClient();
  const router = useRouter();
  const [listCreate, setListCreate] = useState<listCreate>({
    title: "",
    description: "",
    type: "",
  });

  const fetchListCreate = async (params: listCreate) => {
    const { title, description, type } = params;
    const response = await axios
      .post(`${API_BASE_URL}/attendances`, {
        title: title,
        description: description,
        type: type,
      })
      .then((res) => res.data);
    return response;
  };

  const { mutate } = useMutation(fetchListCreate, {
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["attendancy-list"] });
      pushNotification("생성 되었습니다.", "success");
      setIsCreate(false);
      router.prefetch("/attendancy/list");
    },
    onError: () => {
      pushNotification("빈칸을 전부 채워주세요", "warning");
    },
  });

  // Hook
  const onChange = (field: string, value: string) => {
    setListCreate((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  if (isLoading) return <CircularProgress color="inherit" />;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" width={"25%"}>
              출석부 이름
            </TableCell>
            <TableCell align="center" width={"25%"}>
              설명
            </TableCell>
            <TableCell align="center" width={"25%"}>
              타입
            </TableCell>
            <TableCell align="center" width={"25%"}>
              총원
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {infoList?.items.map((item: Info, index: number) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              hover
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push(
                  `/attendancy/list/${item.attendanceId}?description=${item.attendance.description}`
                );
              }}
            >
              <TableCell component="th" scope="row" align="center">
                {item.attendance.title}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {item.attendance.description}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {item.attendance.type === "weekday" ? "평일부" : "주말부"}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                0
              </TableCell>
            </TableRow>
          ))}
          <TableRow
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            style={{ cursor: "pointer" }}
          >
            {isCreate ? (
              <>
                <TableCell component="th" scope="row">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      mutate(listCreate);
                    }}
                  >
                    저장
                  </Button>
                </TableCell>
                <TableCell component="th" scope="row">
                  <TextField
                    id="outlined-basic"
                    label="출석부 이름"
                    variant="outlined"
                    value={listCreate?.title}
                    onChange={(e) => onChange("title", e.target.value)}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  <TextField
                    id="outlined-basic"
                    label="출석부 설명"
                    variant="outlined"
                    value={listCreate?.description}
                    onChange={(e) => onChange("description", e.target.value)}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(e) => onChange("type", e.target.value)}
                  >
                    <FormControlLabel
                      value="weekday"
                      control={<Radio />}
                      label="평일부"
                    />
                    <FormControlLabel
                      value="weekend"
                      control={<Radio />}
                      label="주말부"
                    />
                  </RadioGroup>
                </TableCell>
              </>
            ) : (
              <TableCell
                component="th"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                onClick={() => setIsCreate(true)}
              >
                <AddIcon /> <p>생성</p>
              </TableCell>
            )}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommonTable;
