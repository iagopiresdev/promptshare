import mongoose from "mongoose";
let isConnected = false;

export const connectDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected) {
        console.log('MongoDB alredy online');
        return;
    } else {
        try {
            await mongoose.connect(process.env.MONGODB_URI as string, {
                dbName: "shareprompt",
                //useNewUrlParser: true,
                //useUnifiedTopology: true,
            })
            isConnected = true;
            console.log('MongoDB online');
        } catch (error) {
            console.error(error);
        }
    }
}