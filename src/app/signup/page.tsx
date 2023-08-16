"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import  axios  from "axios";
import { toast } from "react-hot-toast";

export default function SignUpPage() {

  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    if(user.email.length>0 && user.password.length>0 && user.username.length>0){
      setButtonDisabled(false);
    }
    else{
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Success", response.data);
      router.push("/login");
    } catch (error : any) {
      console.log("Signup Failed", error.message);
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Loading" : "SignUp"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={user.username} onChange={(e)=> setUser({...user, username : e.target.value})} placeholder="Username" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" value={user.email} onChange={(e)=> setUser({...user, email : e.target.value})} placeholder="Email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={user.password} onChange={(e)=> setUser({...user, password : e.target.value})} placeholder="Password" />
      <button onClick={onSignup} disabled={buttonDisabled}>Sign Up</button>
      <Link href="/login">Visit Login Page</Link>
    </div>
  );
}
