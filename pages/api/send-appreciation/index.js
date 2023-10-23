import nodemailer from "nodemailer";
export default async function handler(req, res) {
  try {
    const recipientEmail = "jumisu4u@gmail.com"; // Replace with the recipient's email address
    const subject = "Appreciation for the Tattoo"; // Subject of the email
    const body = `I really like your tattoo work, ${req.body.imageTitle}.`; // Body of the email

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "canancansucaner@gmail.com",
        pass: "onnd ydxr iahs ytxa",
      },
    });

    // Send the email
    const mailOptions = {
      from: "canancansucaner@gmail.com",
      to: recipientEmail,
      subject: subject,
      text: body,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "appreciation email sent successfully" });
  } catch (error) {
    console.error("error sending appreciation mail", error);
    res
      .status(500)
      .json({ error: "send appreciation email could not be sent!" });
  }
}
