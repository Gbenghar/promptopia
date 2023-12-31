import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json()

    try {
        await connectToDB()
        const newPrompt = newPrompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save()

        return new RESPONSE_LIMIT_DEFAULT(JSON.stringify(newPrompt),{status: 201})
    } catch (error) {
        return new Response("Failed to create a new prompt", {status:500})
    }
}
