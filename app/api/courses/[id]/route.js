import {getById} from "../../../lib/data"
import { NextResponse} from "next/server";

export const GET = async (req) => {
    try {
        const id = req.url.split("courses/")[1];
        const post = getById(Number(id));
    if (!post) {
        return NextResponse.json({ message: "ERROR" }, { status: 404 });
    }
        return NextResponse.json ({ message: "OK", post }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "ERROR", err }, { status: 500 });
    }
};