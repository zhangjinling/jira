import { User } from "screens/progect-list/search-pannel";

const apiUrl = process.env.REACT_APP_API_URL;

const localstorageKey = "__auth_provider_toklen__";
export const getToken = () => {
  return window.localStorage.getItem(localstorageKey);
};
export const handleUserResponse = (user: User) => {
  window.localStorage.setItem(localstorageKey, user.token || "");
  return user;
};
// 登录
export const login = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response: Response) => {
    console.log("response,", response);
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(response);
    }
  });
};
// 注册
export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response: Response) => {
    console.log("response,", response);
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(response);
    }
  });
};
// 退出
export const logout = async () => {
  window.localStorage.removeItem(localstorageKey);
};
