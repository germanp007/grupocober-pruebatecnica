import express from "express";
import cors from "cors";
import { transporter } from "./emailConfing.js";
//import { config } from "../config.js";
//import nodemailer from "nodemailer";
const server = express();
const PORT = 8080;
//const GMAIL = "pintogerman281@gmail.com";
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
    const { email } = req.body;
    const result = await transporter.sendMail({
      from: "pintogerman281@gmail.com",
      to: "pintogerman281@gmail.com",
      subject: "nuevo suscriptor",
      text: `Felicidades, tienes un nuevo suscriptor ${email}`,
    });
    console.log(result);
    res.json({ status: "success", message: "correo enviado" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", message: "hubo un error al enviar el correo" });
  }
});
