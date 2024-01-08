import { NextResponse } from "next/server";
import connectDB from "../../lib/connect";
import Student from "../../lib/Student";
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    First_Name: String,
    Last_Name: String
}

const GET = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    try {
        await connectDB();
        console.log("ajiljin yeah");
        const Students = await Student.find();
        console.log("ene holbogdohgu bnu" + JSON.stringify(Students));
        //return new NextResponse(JSON.stringify(Students),{status: 200});
        res.status(200).json(Students);
    } catch(error) {
        console.log("error");
    }
}
export default GET;