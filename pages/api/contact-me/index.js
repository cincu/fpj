import nodemailer from "nodemailer";
export default async function handler(request, response) {
  if (request.method === "POST") {
    const { formData } = request.body;

    if (!formData || !formData.fname || !formData.email) {
      return response.status(400).json({ message: "Invalid form data" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SENDER_PASS,
      },
    });

    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.error("Error verifying transporter: ", error);
          return reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mailOptions = {
      from: process.env.SENDER_MAIL,
      to: process.env.RECEIVER_MAIL,
      subject: "Tattoo Appointment Form Submission - Pending Payment",
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
    response.status(405).json({ message: "Method not allowed" });
  }
}
