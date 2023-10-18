import nodemailer from "nodemailer";
// nodemailer = require("nodemailer");
export default async function handler(request, response) {
  if (request.method === "POST") {
    const { formData } = request.body;
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 465,
      secure: true,
      auth: {
        user: "canancansucaner@gmail.com",
        pass: "onnd ydxr iahs ytxa",
      },
    });
    const mailOptions = {
      from: "canancansucaner@gmail.com",
      to: "julianmitz@gmail.com",
      subject: "submitted form data, payment information missing",
      html: `
      <h1>Tattoo Appointment Info</h1>
      <p><strong>First Name:</strong> ${formData.fname}</p>
      <p><strong>Last Name:</strong> ${formData.lname}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>ig:</strong> ${formData.instagram}</p>
      <p><strong>Placement:</strong> ${formData.placement}</p>
      <p><strong>Approximate size:</strong> ${formData.tattooSize}</p>
      <p><strong>Max Budget:</strong> ${formData.tattooBudget}</p>
      <p><strong>References:</strong> ${formData.references}</p>
      <p><strong>Chosen Date:</strong> ${formData.bookingDate}</p>
      <p><strong>Medical conditions:</strong> ${formData.medicalInfo}</p>
      `,
    };
    try {
      await transporter.sendMail(mailOptions);
      response.status(200).json({ message: "email sent successfully" });
    } catch (error) {
      console.log("error sending mail", error);
      response.status(500).json({ message: "email could not be sent" });
    }
  } else {
    response.status(500).end(); //method not allowed
  }
}
