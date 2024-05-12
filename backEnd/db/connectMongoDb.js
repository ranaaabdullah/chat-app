import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.Mongo_Db_Url)
        console.log("Mongo Db Connected")
    } catch (error) {
        console.log("Error connecting to mongoDb :", error)
    }

}
export default connectMongoDb