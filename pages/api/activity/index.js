import connectDB from "../../../lib/connect";
import {mongoose, models} from 'mongoose'
import Activity from "../../../lib/Activity";

const GET = async (
    req,
    res
) => {
    try {
        await connectDB();
        console.log("Activity ajiljinu");
        const ActivityData = await mongoose.models.Activity.findOne();
        console.log("Activity connect" + JSON.stringify(ActivityData));
        res.status(200).json(ActivityData);
    } catch(error) {
        console.log("error");
    }
}
export default GET;