import jwt from 'jsonwebtoken';
import sendMail from './sendMail';

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

    const token = generateTokenForUser(user);
    const link = `http://localhost:3000/confirm-registration?token=${token}`;
    const content = `Please click on the following link to confirm your registration to "${event}": ${link}`;

    const info = await sendMail(user.email, 'Confirm your registration', content);
    console.log('Message sent: %s', info.messageId);
}
