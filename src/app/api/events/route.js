import prisma from '@/app/database/PrismaClient';

import { sendSuccessResponse, sendErrorResponse } from '@/app/utils/response';

export async function GET() {
    return await getEvents();
}
export async function POST() {
    return await createEvent(req);
}
export async function PUT() {
    return await createEvent(req);
}

async function getEvents() {
    try {
        const events = prisma.Event.findMany();
        return sendSuccessResponse(res, 200, 'Events found successfully', events);
    } catch (error) {
        return sendErrorResponse(res, 500, 'Error getting events', error.message);
    }
}

async function createEvent(req) {
    try {
        const { title, description, start_date, end_date } = await req.json();
        const event = prisma.Event.create({
            data: {
                title,
                description,
                start_date,
                end_date,
            },
        });
        return sendSuccessResponse(res, 201, 'Event created successfully', event);
    } catch (error) {
        return sendErrorResponse(res, 500, 'Error creating event', error.message);
    }
}
