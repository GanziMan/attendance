import { Checkbox, FormControlLabel, SxProps, Theme } from "@mui/material";
import React, { ChangeEvent } from "react";

interface IProps {
  text?: string | React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  iconType: "square" | "square-lined" | "circle";
  isCheck: (ischeck: boolean) => void;
  sx?: SxProps<Theme>;
}

export default function BCheckBox({
  text,
  checked,
  disabled,
  iconType = "square",
  isCheck,
  sx,
}: IProps) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          // icon={
          //   iconType === "square" || iconType === "square-lined" ? (
          //     <ImgUnCheckedSquare width={24} height={24} />
          //   ) : (
          //     <ImgUnCheckedCircle width={24} height={24} />
          //   )
          // }
          // checkedIcon={
          //   iconType === "square-lined" ? (
          //     <ImgCheckedSquareLined width={24} height={24} />
          //   ) : iconType === "square" ? (
          //     <ImgCheckedSquare width={24} height={24} />
          //   ) : (
          //     <ImgCheckedCircle width={24} height={24} />
          //   )
          // }
          disabled={disabled}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            isCheck(e.target.checked);
          }}
        />
      }
      sx={{ fontSize: "14px", color: "#616161", marginRight: 0, ...sx }}
      label={text}
    />
  );
}
