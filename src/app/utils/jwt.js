import jwt from 'jsonwebtoken';
import sendMail from './sendMail';

export function generateEventInvitationToken(email, event_id) {
    const payload = {
        email,
        event_id,
    };

    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(payload, secretKey, { expiresIn: '76h' });

    return token;
}

export function verifyEventInvitationToken(token) {
    try {
        const secretKey = process.env.JWT_SECRET_KEY;
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        console.log('Invalid token');
        return null;
    }
}

export function generateTokenForUser(user) {

    const payload = {
        sub: user.id,
        // iat: new Date().getTime()
    };
    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(payload, secretKey, { expiresIn: '76h' });

    return token;
}

export function verifyToken(token) {
    try {
        const secretKey = process.env.JWT_SECRET_KEY;
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        console.log('Invalid token');
        return null;
    }
}
