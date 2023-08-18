"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  useEffect(()=> {
    if(user.email.length>0 && user.password.length>0){
      setButtonDisabled(false);
    }
    else{
      setButtonDisabled(true);
    }
  }, [user]);

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try{
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      console.log("Login successful", response.data);
      toast.success("Login Success");
      router.push("/profile");
    }
    catch(err : any){
      console.log("Login failed", err.message);
      toast.error(err.message);
    }
    finally{
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input type="text" id="email" value={user.email} onChange={(e)=> setUser({...user, email : e.target.value})} placeholder="Email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={user.password} onChange={(e)=> setUser({...user, password : e.target.value})} placeholder="Password" />
      <button onClick={onLogin} disabled={buttonDisabled}>LogIn</button>
      <Link href="/signup">Visit Sign Up Page</Link>
    </div>
  );
}
