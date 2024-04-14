import nodemailer from "nodemailer";
//import { config } from "../config";
//Crear el Transporte ////

const GMAIL = "pintogerman281@gmail.com";
const GMAIL_PASSWORD = "thiw gdll qzgh enri";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    // user: config.gmail.account,
    // pass: config.gmail.password,
    user: GMAIL,
    pass: GMAIL_PASSWORD,
  },
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
});
