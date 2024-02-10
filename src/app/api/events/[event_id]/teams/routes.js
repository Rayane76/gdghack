import prisma from '@/app/database/PrismaClient'
import { sendSuccessResponse, sendErrorResponse } from '@/app/utils/response'

export const GET = async () => {
    try {
        const submissions = await prisma.teams.findMany()
        return sendSuccessResponse(res, 200, "Submissions retrieved successfully", submissions)
    } catch (error) {
        return sendErrorResponse(res, 500, "Error retrieving submissions", error.message)
    }
}

// add a team to an event
export const POST = async (req) => {
    try {
        const {
            event_id,
            name,
        } = await req.json()
        const submission = await prisma.teams.create({
            data: {
                event_id,
                name,
            }
        })
        return sendSuccessResponse(res, 201, "Submission created successfully", submission);
    } catch (error) {
        return sendErrorResponse(res, 500, "Error creating submission", error.message);
    }
}
