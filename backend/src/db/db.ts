import mongoose from "mongoose";

export const db = async (db_url: string) => {
    try{
        mongoose.set('strictQuery', false);
        mongoose.Promise = Promise;
        mongoose.connect(db_url);     
        console.log('DB Connected.');
    } 
    
    catch (error) {
        console.log(`DB Connection Error: ${error}`);
    }
}