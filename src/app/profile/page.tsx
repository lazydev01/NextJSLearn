"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from 'react';
import { toast } from "react-hot-toast";
import {useRouter} from 'next/navigation';
export default function ProfilePage(){

    const router = useRouter();

    const [data, setData] = useState("nothing");

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout Successful");
            router.push("/login");
        } catch (error : any) {
            console.log(error.message)
            toast.error(error.message);
        }
    }

    const getUserDetails = async() => {
        const response = await axios.get("/api/users/me")
        console.log(response.data);
        setData(response.data.data._id);
    }

    return (
        <div>
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <hr />
            <h2>{data === "nothing" ? "Nothind" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <button onClick={logout} className="btn btn-primary">Logout</button>
            <button onClick={getUserDetails} className="btn btn-primary">Get User Details</button>
        </div>
    )
}