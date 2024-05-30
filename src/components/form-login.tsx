"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

function FormLogin() {
  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e: any) {
    setEmail(e.target.value);
  }

  function handlePassword(e: any) {
    setPassword(e.target.value);
  }

  function handleLogin(e: any) {
    e.preventDefault();
    console.log(email);
    console.log(password);

    router.replace("/")
  }

  return (
    <div>
      <form action="">
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmail}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <Button onClick={handleLogin}>Login</Button>
      </form>
      <Link href="/about">About</Link>
    </div>
  );
}

export default FormLogin;
