// Import dependencies
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Route to handle contact form submissions
app.post("/contact", async (req, res) => {
    const { fullname, email, message } = req.body;

    if (!fullname || !email || !message) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // Your email (receiver)
            pass: process.env.EMAIL_PASS, // Your app password
        },
    });

    // Email options
    const mailOptions = {
        from: email, // Sender's email (John Doe's email)
        to: process.env.EMAIL_USER, // Your email (receiver)
        subject: `Contact Form Message from ${fullname}`, // Dynamic subject
        text: `
Message from: ${fullname} (${email})

${message}
        `,
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
