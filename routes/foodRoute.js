import express from "express";
import { addFood, listFood, removeFood } from "../controlers/foodController.js";
import multer from "multer";
import foodModel from "../models/foodModel.js";

const foodRouter = express.Router();

//image storage iengine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);
foodRouter.get("/list/search/:key", async (req, res) => {
  let data = await foodModel.find({
    $or: [
      { name: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.json({ success: true, data: data });
});
export default foodRouter;
