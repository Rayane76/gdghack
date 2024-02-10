const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

async function generateCriteria(field) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    let modelRole = ""
    switch (field) {
        case 'UI':
            modelRole = 'senior UI designer'
            break
        case 'FRONTEND':
            modelRole = 'senior Frontend engineer'
            break
        case 'BACKEND':
            modelRole = 'senior Backend engineer'
            break
        case 'AI':
            modelRole = 'senior AI (machine learning and deep learning) engineer'
            break
        default:
            modelRole = await generateRole(field)
    }

    const description = "'DevFest', short for 'Developer Festival' is an annual technical event organized by Google Developer Groups (GDGs), aiming to deliver conferences and workshops to students, developers, professionals, and everyone passionate about the tech field. It is considered a great opportunity for tech enthusiasts to build and expand their networks and get updated about the latest trends."
    const prompt = `You are a professional ${modelRole} at a Hackathon. Give 5 evaluation criteria for the ${field} field of the competition in a list format, where each criterion is associated with an importance score out of 10 (don't include the scale), following JSON format: "{criterion}: {score}". The criterion should be in one keyword, which is no more than 2 words. The criterion should also be as precise as possible, so you should avoid verbose criteria that doesn't clearly reflect what is being evaluated. The criterion shouldn't be about the presentation and pitch performance, or about the business side of the proposed solution. but only about the ${field} field. Consider the fact that the competition doesn't last for more than 48 hours in general, and that it's a competition for college students who are in their first 3 years, so they don't have much experience, nor enough time to implement sophisticated solutions, so you should consider these factors in selecting your criteria and their scores. Here is the competition\'s description: ${description}. Don't use markdown notations or add any styling characters e.g the \`\`\` characters before the answer, and don't format the answer in a markdown bloc using markdown, so the answer should start with '{'immediately`

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log(text);
}

async function generateRole(field){
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Given the field ${field}, give me the name of the role (title) of an expert e.g senior in that field, for example, for the field frontend, a name of a title could be "Senior Frontend Engineer". Your answer should only contain the name`

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log(text);
    return text

}

generateCriteria("BLOCKCHAIN")
