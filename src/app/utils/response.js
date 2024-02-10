// send a response saying "hello world"
import { NextResponse } from "next/server";

export const sendSuccessResponse = (res, statusCode, message, data) => {
    data.password = undefined
    return NextResponse.json({success: true, message, data}, {status: statusCode})
}

export const sendErrorResponse = (res, statusCode, message, error) => {
    return NextResponse.json({success: false, message, error}, {status: statusCode})
}
