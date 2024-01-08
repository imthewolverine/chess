import {Schema, model, models, mongoose} from 'mongoose';

const StudentsSchema = new Schema({
    First_Name: String,
    Last_Name: String,
    
});
export const Students = mongoose.models.Students || mongoose.model("Students", StudentsSchema);

const ActivitySchema = new Schema({
    Title: String,
    Body: String,
    Image: String,
    Date: Date
});
export const Activity = mongoose.models.Activity || mongoose.model("Activities", ActivitySchema);

const FeedbackSchema = new Schema({
    sisi_id: String,
    body: String
});
export const Feedback = mongoose.models.Feedback || mongoose.model("StudeFeedbacknts", FeedbackSchema);


const OptionSchema = new mongoose.Schema({
    optionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    votes: {
      type: Number,
      default: 0,
    },
});
export const Options = mongoose.model('Options', OptionSchema);

const PollSchema = new Schema({
    question: {
      type: String,
      required: true,
    },
    options: [{
      type: OptionSchema,
      ref: 'Option',
    }],
});
export const Poll = mongoose.model('Poll', PollSchema);

const ScheduleSchema = new Schema({
    Date: Date,
    Teacher: String,
    Subject: String,
    Level: String
});
export const Schedule = mongoose.models.Schedule || mongoose.model("Schedule", ScheduleSchema);
