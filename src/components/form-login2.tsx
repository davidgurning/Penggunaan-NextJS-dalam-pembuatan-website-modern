"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function FormLogin2() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e: any) {
    e.preventDefault();
    console.log(userLogin);
  }

  return (
    <div>
      <form action="">
        <Input
          type="email"
          placeholder="email"
          name="email"
          value={userLogin.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          value={userLogin.password}
          onChange={handleChange}
        />
        <Button onClick={handleLogin}>Login</Button>
      </form>
    </div>
  );
}

export default FormLogin2;
