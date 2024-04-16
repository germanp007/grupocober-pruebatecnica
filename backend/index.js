import express from "express";
import cors from "cors";
import { transporter } from "./emailConfing.js";
import { config } from "./config.js";
//import nodemailer from "nodemailer";
const server = express();
const PORT = config.server.PORT_BACK;
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
      // to: "admin@grupocober.online",
      subject: "nuevo suscriptor",
      html: `
      <head>
      <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      h1 {
        color: #333;
      }
      p {
        color: #666;
        margin-bottom: 20px;
      }
     
    </style>
  </head>
  <body>
    <div class="container">
      <h1>¡Hola administrador!</h1>
      <p>Hemos recibido un nuevo contacto para agregar a la WhiteList.</p>
      <h2>${email}</h2>
      
    </div>
  </body>`,
    });
    console.log(result);
    res.json({ status: "success", message: "correo enviado" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", message: "hubo un error al enviar el correo" });
  }
});
