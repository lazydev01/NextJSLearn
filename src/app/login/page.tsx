"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={user.username} onChange={(e)=> setUser({...user, username : e.target.value})} placeholder="Username" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" value={user.email} onChange={(e)=> setUser({...user, email : e.target.value})} placeholder="Email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={user.email} onChange={(e)=> setUser({...user, password : e.target.value})} placeholder="Password" />
      <button onClick={onSignup}>Sign Up</button>
      <Link href="/login">Visit Login Page</Link>
    </div>
  );
}
