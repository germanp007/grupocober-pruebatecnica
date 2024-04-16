import dotenv from "dotenv";

dotenv.config();

const config = {
  server: {
    PORT_BACK: process.env.PORT_BACK || 8080,
  },
  gmail: {
    account: process.env.GMAIL,
    password: process.env.GMAIL_PASSWORD,
  },
};

export { config };
