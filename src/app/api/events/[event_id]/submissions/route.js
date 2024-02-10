import prisma from '@/app/database/PrismaClient'
import { sendSuccessResponse, sendErrorResponse } from '@/app/utils/response'
import { sendEmail } from '@/app/utils/mailer'

export const GET = async () => {
    try {
        const submissions = await prisma.teams.findMany()

        return sendSuccessResponse(res, 200, "Submissions retrieved successfully", submissions)

    } catch (error) {
        return sendErrorResponse(res, 500, "Error retrieving submissions", error)
    }
}

export const POST = async (req) => {
    try {
        const user_id = req.user.id

        const {
            event_id,
            name,
            has_submitted,
            submission_project_name,
            submission_thumbnail,
            submission_description,
            submission_techs,
            submission_links,
            submission_demo_link,
        } = await req.json()

        const submission = await prisma.teams.create({
            data: {
                event_id,
                name,
                has_submitted,
                submission_project_name,
                submission_thumbnail,
                submission_description,
                submission_techs,
                submission_links,
                submission_demo_link,
            }
        })

        // send submission email
        const user = prisma.User.findUnique({
            where: {
                id: user_id
            }
        })

        sendEmail(user.email, "Submission confirmed", "Your submission has been confirmed")

        return sendSuccessResponse(res, 201, "Submission created successfully", submission);
    } catch (error) {
        return sendErrorResponse(res, 500, "Error creating submission", error.message);
    }
}
