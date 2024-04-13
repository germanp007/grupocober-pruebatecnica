import nodemailer from "nodemailer";

//Crear el Transporte ////

const GMAIL = "pintogerman281@gmail.com";
const GMAIL_PASSWORD = "thiw gdll qzgh enri";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: GMAIL,
    pass: GMAIL_PASSWORD,
  },
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
});
