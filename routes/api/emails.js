const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { emailAddress, emailPassword } = require("../../config/keys");
router.post("/", createEmail);

async function createEmail(req, res) {
  let { stack, message, name } = req.body.errorInfo;
  // how do I persist this transporter across requests?
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    auth: {
      user: emailAddress,
      pass: emailPassword,
    },
  });
  const beginning = `<h1>Message: ${message}</h1><strong>STACK TRACE</strong><br/>`;
  const html = beginning.concat(
    stack
      .split("\n")
      .map(line => `<li>${line}</li>`)
      .join(""),
  );

  const mailOptions = {
    from: emailAddress,
    to: emailAddress,
    subject: `Error Report: ${name}`,
    html,
  };
  await transporter.sendMail(mailOptions);
}

module.exports = router;
