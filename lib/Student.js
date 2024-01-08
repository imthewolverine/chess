import {Schema, model, models, mongoose} from 'mongoose';

const StudentSchema = new Schema({
    First_Name: String,
    Last_Name: String
});

const Student = mongoose.models.Students || mongoose.model("Students", StudentSchema);

export default Student;