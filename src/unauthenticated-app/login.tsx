import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

export const LoginScreen = () => {
  const { login, user } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    login({ username, password });
    event.preventDefault();
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"}></input>
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type={"password"} id={"password"}></input>
      </div>
      <div>
        <button type={"submit"}>登录</button>
      </div>
    </form>
  );
};