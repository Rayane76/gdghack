import prisma from '@/app/database/PrismaClient'
import { sendSuccessResponse, sendErrorResponse } from '@/app/utils/response'
import { verifyEventInvitationToken } from '@/app/utils/jwt'
import { sendEmail } from '@/app/utils/mailer'

export const GET = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const token = searchParams.get('token');

        // find the pending user using the token
        const pendingUser = await prisma.PendingUser.findUnique({
            where: {
                token,
            }
        })

        if (!pendingUser) {
            return sendErrorResponse(res, 404, "Invalid invitation", "Token not found");
        }

        // get the user event_id from the token payload and assign the user to the event
        const payload = verifyEventInvitationToken(token);

        const user = await prisma.User.findUnique({
            where: {
                email: payload.email,
            }
        })

        await prisma.user_team.create({
            data: {
                user_id: user.id,
                team_id: payload.team_id,
            }
        })

        // delete the pending user instance
        await prisma.PendingUser.delete({
            where: {
                id: pendingUser.id,
            }
        })

        sendEmail(user.email, "Participation confirmed", "You have successfully confirmed your participation in the event")

        return sendSuccessResponse(res, 201, "Participants confirmed successfully", null);
    } catch (error) {
        return sendErrorResponse(res, 500, "Error confirming participant", error.message);
    }
}
