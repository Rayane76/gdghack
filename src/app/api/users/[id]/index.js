import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });


function generateTokenForUser(user) {

    const payload = {
        sub: user.id,
        // iat: new Date().getTime()
    };
    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(payload, secretKey, { expiresIn: '76h' });

    return token;

}

function verifyToken(token) {
    try {
        const secretKey = process.env.JWT_SECRET_KEY;
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        console.log('Invalid token');
        return null;
    }
}

async function sendConfirmationEmail(user, event) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let token = generateTokenForUser(user);
    let link = `http://localhost:3000/confirm-registration?token=${token}`;

    let info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: user.email,
        subject: 'Confirm your registration',
        text: `Please click on the following link to confirm your registration: ${link}`
    });

    console.log('Message sent: %s', info.messageId);
}

