import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbconfig/dbconfig";

connect();

export async function GET(request : NextRequest){
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findById(userId).select("-password");
        return NextResponse.json({message : "User Found", data : user}, {status : 200});
    } catch (error : any) {
        return NextResponse.json({error : error.message, success : false}, {status : 400});
    }
}
