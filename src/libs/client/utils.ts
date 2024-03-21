import axios from "axios";

// 숫자 3자리마다 콤마 찍기
export const onlyNumWithDecimal = (
  val: string | number,
  maxDecimal: number = 2
) => {
  val = String(val);
  if (val === ".") {
    return "0";
  }

  if (val.charAt(0) === "0" && val.charAt(1) !== "" && val.charAt(1) !== ".") {
    return "0";
  }

  let str = val.split(".", 2);

  str[0] = str[0].replace(/[^.0-9]/g, "").replace(/(.)(?=(\d{3})+$)/g, "$1,");

  if (str[1]) {
    str[1] = str[1].replace(/[^.0-9]/g, "");

    if (str[1].length >= (maxDecimal ?? 4)) {
      str[1] = str[1].substring(0, maxDecimal ?? 4);
    }
  }

  let fmStr = str.join(".");

  return fmStr;
};

export const isEmailFormat = (email: string) => {
  if (email == null || email.length <= 0) {
    return false;
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return emailRegex.test(email);
};

export const isPasswordFormat = (password: string) => {
  if (password == null || password.length <= 0) {
    return false;
  }

  // const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
  // 숫자 , 영소문자 -> 필수
  // 영대문자, 특수문자 -> 옵셔널 (기획팀 확정안 반영)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z]?)(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,20}$/;

  return passwordRegex.test(password);
};

export const isPhoneNumberFormat = (phoneNumber: string) => {
  const removedHyphen = phoneNumber?.replaceAll("-", "");
  if (phoneNumber == null || phoneNumber.length <= 0) {
    return false;
  }

  const phoneNumberRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;

  return phoneNumberRegex.test(removedHyphen);
};

export const getOnlyNumber = (number: string) => {
  const result = number.replace(/[^.0-9]/g, "");

  return result;
};

export const getLocalStorage = (key: string) => {
  try {
    return window?.localStorage.getItem(key);
  } catch (error) {
    console.error("getLocalStorage : ", error);
    return undefined;
  }
};

export const setLocalStorage = (key: string, value: string) => {
  try {
    window?.localStorage.setItem(key, value);
  } catch (error) {
    console.error("setLocalStorage : ", error);
  }
};

export const removeLocalStorage = (key: string) => {
  try {
    window?.localStorage.removeItem(key);
  } catch (error) {
    console.error("removeLocalStorage : ", error);
  }
};

export const isNameFormat = (name: string) => {
  const nameRegex = /^[가-힣A-Za-z0-9]{1,50}$/;

  return nameRegex.test(name);
};

export const isEmptyObj = (obj: Object) => {
  if (obj.constructor === Object && Object.keys(obj).length === 0) {
    return true;
  }

  return false;
};

export const maskEmail = (email?: string) => {
  if (!email) {
    return "";
  }
  // 이메일 주소를 '@'를 기준으로 분할
  let parts = email.split("@");
  let username = parts[0];
  let domain = parts[1];

  // 사용자 이름의 일부를 '*'로 대체
  let maskedUsername =
    username.charAt(0) +
    "*".repeat(username.length - 2) +
    username.charAt(username.length - 1);

  // 마스킹된 사용자 이름과 도메인을 결합하여 마스킹된 이메일 주소 생성
  let maskedEmail = maskedUsername + "@" + domain;
  return maskedEmail;
};

export const isArrayWithUndefined = (arr?: any[]) => {
  if (!arr) return true;
  return arr.some((item) => item === undefined);
};
export const setInterceptor = (token: string) => {
  if (!token) return false;
  return true;
};
