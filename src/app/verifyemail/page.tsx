"use client";

import axios from "axios";
import Link from 'next/link';
import React, {useState, useEffect} from "react";

export default function VerifyEmailPage(){
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async() => {
        try {
            
        } catch (error : any) {
            setError(true);
            console.log(error.response.data);
            
        }
    }
}