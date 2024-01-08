import connectDB from "../../../lib/connect";
import {mongoose, models} from 'mongoose'

const GET = async (
    req,
    res
) => {
    try {
        await connectDB();
        console.log("ajiljin yeah"); 
        const StudentsData = await mongoose.models.Students.findOne();
        console.log("ene holbogdohgu bnu" + JSON.stringify(StudentsData));
        //return new NextResponse(JSON.stringify(Students),{status: 200});
        res.status(200).json(StudentsData);
    } catch(error) {
        console.log("error");
    }
}
export default GET;