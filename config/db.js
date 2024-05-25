import mongoose from "mongoose";
const DB_URL = process.env.DB_URL;
export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://usergreatstack:9784089440@cluster0.qljcp9c.mongodb.net/food-del"
    )
    .then(() => console.log("Db Connected"));
};
