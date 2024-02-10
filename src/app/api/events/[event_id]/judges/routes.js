import prisma from '@/app/database/PrismaClient'
import { generateEventInvitationToken } from '@/app/utils/jwt'
import { sendSuccessResponse, sendErrorResponse } from '@/app/utils/response'

export const POST = async (req) => {
    const { id:events_id, judge_id } = req.query

    try {
        const event = await prisma.event.findUnique({
            where: {
                id: parseInt(events_id)
            }
        })

        if (!event) {
            return sendErrorResponse(res, 404, 'Event not found', null)
        }

        // get the judges emails
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

        const eventJudge = await prisma.event_judge.create({
            data: {
                event: {
                    connect: {
                        id: parseInt(event_id)
                    }
                },
                judge: {
                    connect: {
                        id: judge_id
                    }
                }
            }
        })

        return sendSuccessResponse(201, eventJudge)
    } catch (error) {
        return sendErrorResponse(500, error)
    }
}
