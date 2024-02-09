import prisma from '@/app/database/PrismaClient';

import { sendSuccessResponse, sendErrorResponse } from '@/app/utils/response';

export async function GET(req) {
    return await getCriterion(req);
}
export async function PUT(req) {
    return await updateCriterion(req);
}
export async function DELETE(req) {
    return await deleteCriterion(req);
}

async function getCriterion(req) {
    try {
        const { id: criterionId } = req.query;
        const criterion = await prisma.criterion.findUnique({
            where: { id: criterionId },
        });
        if (!criterion) {
            return sendErrorResponse(res, 404, 'Criterion not found', 'criterion not found');
        }
        return sendSuccessResponse(res, 200, 'Criterion found successfully', criterion);
    } catch (error) {
        return sendErrorResponse(res, 500, 'Error getting criterion', error.message);
    }
}

async function updateCriterion(req) {
    try {
        const { id: criterionId } = req.query;
        const { name, description, event_id } = await req.json();
        const criterion = prisma.criterion.update({
            where: { id: criterionId },
            data: {
                name,
                description,
                event_id,
            },
        });
        return sendSuccessResponse(res, 200, 'Criterion updated successfully', criterion);
    } catch (error) {
        return sendErrorResponse(res, 500, 'Error updating criterion', error.message);
    }
}

async function deleteCriterion(req) {
    try {
        const { id: criterionId } = req.query;
        await prisma.criterion.delete({
            where: { id: criterionId },
        });
        return sendSuccessResponse(res, 204, 'Criterion deleted successfully', null);
    } catch (error) {
        return sendErrorResponse(res, 500, 'Error deleting criterion', error.message);
    }
}
