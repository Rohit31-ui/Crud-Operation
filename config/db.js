import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.mongoURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("❌ Connection error:", error.message);
        process.exit(1); // Exit process with failure
    }
}

export default connectDB;