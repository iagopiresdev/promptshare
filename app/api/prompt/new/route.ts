'use server';

import { connectDB } from '@utils/db'
import Prompt from '@models/prompt'

export const POST = async (req: Request, res: Response) => {
    const { userId, prompt, tag } = await req.json();

    try {
        await connectDB();
        const newPrompt = new Prompt({
            creator: userId,  
            prompt: prompt,
            tag: tag,
        })
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {
            status: 200,

        });

    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 500,
        });
        
    }

}
