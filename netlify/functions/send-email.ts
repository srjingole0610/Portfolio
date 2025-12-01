import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import dns from 'dns';
import { promisify } from 'util';

const resolveMx = promisify(dns.resolveMx);

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    
    // 1. Validate Input
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          message: 'Validation Error', 
          errors: result.error.flatten().fieldErrors 
        }),
      };
    }

    const { name, email, message } = result.data;

    // 2. Validate MX Records
    try {
      const domain = email.split('@')[1];
      const mxRecords = await resolveMx(domain);
      if (!mxRecords || mxRecords.length === 0) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Invalid email domain (no MX records found)' }),
        };
      }
    } catch (error) {
      console.error('MX Lookup Error:', error);
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid email domain or DNS error' }),
      };
    }

    // 3. Send Email
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address (must be authenticated user for Gmail)
      to: 'suraj.ingole0610@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };

  } catch (error) {
    console.error('Email Send Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email. Please try again later.' }),
    };
  }
};
