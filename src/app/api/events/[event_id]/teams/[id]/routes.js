import prisma from '@/app/database/PrismaClient'
import { sendSuccessResponse, sendErrorResponse } from '@/app/utils/response'

export const DELETE = async (req) => {
    try {
        const { id } = req.params;

        const team = await prisma.team.delete({
            where: {
                id: parseInt(id),
            },
        });

        return sendSuccessResponse(res, 200, "Team deleted successfully", team);
    } catch (error) {
        return sendErrorResponse(res, 500, "Error deleting team", error.message);
    }
}
