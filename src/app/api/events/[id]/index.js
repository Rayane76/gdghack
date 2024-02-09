import prisma from '@/app/database/PrismaClient';

import { sendSuccessResponse, sendErrorResponse } from '@/app/utils/response';

export async function GET() {
    return await getEvent(req);
}
export async function PUT() {
    return await updateEvent(req);
}
export async function DELETE() {
    return await deleteEvent(req);
}

async function getEvent(req) {
    try {
        const event = await prisma.event.findUnique({
            where: { id: eventId },
        });

        if (!event) {
            return sendErrorResponse(res, 404, 'Event not found', 'event not found');
        }

        return sendSuccessResponse(res, 200, 'Event found successfully', event);
    } catch (error) {
        return sendErrorResponse(res, 500, 'Error getting event', error.message);
    }
}

async function updateEvent(req) {
    try {
        const { id, title, description, start_date, end_date } = await req.json();
        const event = prisma.event.update({
            where: { id },
            data: {
                title,
                description,
                start_date,
                end_date,
            },
        });
        return sendSuccessResponse(res, 200, 'Event updated successfully', event);
    } catch (error) {
        return sendErrorResponse(res, 500, 'Error updating event', error.message);
    }
}

async function deleteEvent(req) {
    try {
        const { id } = await req.json();
        await prisma.event.delete({
            where: { id },
        });
        return sendSuccessResponse(res, 204, 'Event deleted successfully', null);
    } catch (error) {
        return sendErrorResponse(res, 500, 'Error deleting event', error.message);
    }
}
