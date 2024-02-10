// send a response saying "hello world"
import { NextResponse } from "next/server";

export async function GET(req){
    return NextResponse.json({ success: true, message: 'hello world' }, {status: 201});
}
