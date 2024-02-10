import { sendSuccessResponse, sendErrorResponse } from "@/app/utils/response"
import { generateCriteria} from "@/app/utils/criteria-generator"

export const POST = async (req, res) => {
    const { field } = req.body;

    if (!field) sendErrorResponse(res, 400, 'Field "field" is required')

    const criteriaJSON = await generateCriteria(field)
    const criteria = JSON.parse(criteriaJSON)

    try {

        res.status(200).json({ data })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
