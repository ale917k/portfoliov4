import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import nodemailer from "nodemailer";
import "dotenv/config";

// App configuration
const app = express();
const port = process.env.PORT || 8080;
export const baseURL = process.env.NODE_ENV === "development" ? "/api" : "";

// Middlewares
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

// Set up transport protocols and authentication
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USER,
    clientId: process.env.MAIL_CLIENT_ID,
    clientSecret: process.env.MAIL_CLIENT_SECRET,
    refreshToken: process.env.MAIL_REFRESH_TOKEN,
    accessToken: process.env.MAIL_ACCESS_TOKEN,
  },
});

// PWA Service worker
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

// API for sending email
app.post(`${baseURL}/send_email`, (req, res) => {
  const contactEmail = {
    from: req.body.email,
    to: process.env.MAIL_USER,
    subject: process.env.MAIL_SUBJECT,
    html: req.body.messageHtml,
  };

  transport.sendMail(contactEmail, (err, info) => {
    if (err) {
      res.status(500).json({
        error: err,
        user: process.env.MAIL_USER,
      });
      console.log("Email transport err", err);
    } else {
      res.status(201).json({
        message: "Email sent successfully!",
      });
    }
  });
});

// Base listeners
app.get(`${baseURL}/`, (_, res) => {
  res.status(201).send(`Server is up and running on ${process.env.NODE_ENV} - port ${port}`);
});

app.listen(port, () => {
  console.log(`Listening on ${process.env.NODE_ENV} - port ${port}`);
});
