"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignUpPage() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const onLogin = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input type="text" id="email" value={user.email} onChange={(e)=> setUser({...user, email : e.target.value})} placeholder="Email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={user.email} onChange={(e)=> setUser({...user, password : e.target.value})} placeholder="Password" />
      <button onClick={onLogin}>LogIn</button>
      <Link href="/signup">Visit Sign Up Page</Link>
    </div>
  );
}
