import {connect} from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request : NextRequest){
    try{

    }catch(err : any){
        return NextResponse.json({error : err.message}, {status : 500});
    }
}