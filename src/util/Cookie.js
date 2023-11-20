import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const cookieData = {
  process: "0",
};

export const setCookie = (_name, _value, _options = {}) => {
  return cookies.set(_name, _value, { ..._options });
};

export const getCookie = (_name) => {
  return cookies.get(_name);
};
