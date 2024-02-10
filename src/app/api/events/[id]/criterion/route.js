import prisma from '@/app/database/PrismaClient';

import { sendSuccessResponse, sendErrorResponse } from '@/app/utils/response';

export async function GET() {
    return await getCriteria(req);
}
export async function POST() {
    return await createCriterion(req);
}
export async function PUT() {
    return await createCriterion(req);
}

async function getCriteria(req) {
    try {
        const criteria = prisma.criterion.findMany();
        return sendSuccessResponse(res, 200, 'Criteria found successfully', criteria);
    } catch (error) {
        return sendErrorResponse(res, 500, 'Error getting criteria', error.message);
    }
}

async function createCriterion(req) {
    try {
        const { name, description, event_id } = await req.json();
        const criterion = prisma.criterion.create({
            data: {
                name,
                description,
                event_id,
            },
        });
        return sendSuccessResponse(res, 201, 'Criterion created successfully', criterion);
    } catch (error) {
        return sendErrorResponse(res, 500, 'Error creating criterion', error.message);
    }
}
