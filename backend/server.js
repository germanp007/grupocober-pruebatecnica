import express from "express";
import cors from "cors";
//import nodemailer from "nodemailer";
const server = express();
const PORT = 3000;
// const GMAIL = "pintogerman281@gmail.com";
// const GMAIL_PASSWORD = "thiw gdll qzgh enri";
server.use(cors());
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Middleware to handle JSON data
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.post("/api/enviar-correo", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.json({ status: "error" });
  }
});
