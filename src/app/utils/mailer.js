import transporter from '@/app/config/mailTransporter';

export function sendEmail(destinationEmail, subject, content) {
    transporter.sendMail({
        from: process.env.EMAIL,
        to: destinationEmail,
        subject: subject,
        text: content,
    });

}
