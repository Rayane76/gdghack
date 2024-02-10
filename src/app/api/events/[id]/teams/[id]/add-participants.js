import prisma from '@/app/database/PrismaClient'
import { sendSuccessResponse, sendErrorResponse } from '@/app/utils/response'
import { generateEventInvitationToken } from '@/app/utils/jwt'
import { sendEmail } from '@/app/utils/mailer'

export const POST = async (req) => {
    try {

        // get the team
        const { searchParams } = new URL(req.url);
        const team_id = searchParams.get('team_id');

        // get the emails
        const {
            emails,
        } = await req.json()

        // for each email, create a token, create a PendingUser, send a confirmation email
        for (const email of emails) {
            const token = generateEventInvitationToken(email, team_id)
            const pendingUser = await prisma.PendingUser.create({
                data: {
                    email,
                    token,
                }
            })

            // send email
            const link = `http://localhost:3000/api/events/confirm-participation?token=${token}`
            const text = `Please click on the following link to confirm your registration: ${link}`
            sendEmail(pendingUser.email, "Participation confirmation", text)
        }

        return sendSuccessResponse(res, 201, "Participants added successfully", null);
    } catch (error) {
        return sendErrorResponse(res, 500, "Error adding participant", error.message);
    }
}
