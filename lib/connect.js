import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/numchessclub", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongo connected");
    } catch(error) {
        throw new Error("Ai huh tenger");
    }
}
export default connectDB;