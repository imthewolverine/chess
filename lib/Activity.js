import {Schema, model, models, mongoose} from 'mongoose';

const ActivitySchema = new Schema({
    First_Name: String,
    Last_Name: String
});

const Activity = mongoose.models.Activity || mongoose.model("Activity", ActivitySchema);

export default Activity;