import mongoose from "mongoose";


export async function connectToDB(url: any) {
    mongoose.connect(url)
        .then(() => console.log("Connected to DB"))
        .then((err) => console.log(err));
}

export default connectToDB;