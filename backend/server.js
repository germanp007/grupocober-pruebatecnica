import express, { json, urlencoded } from "express";

const server = express();
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Middleware to handle JSON data
server.use(json());
server.use(urlencoded({ extended: true }));
