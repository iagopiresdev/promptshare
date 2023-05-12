'use server';

import { connectDB } from "@utils/db";
import  Prompt  from "@models/prompt";

export const GET = async (req: Request, res: Response) => {
    try {
        await connectDB();
        const prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 500,
        });
    }
}


/*
export default async (req, res) => {
    await connectDB();
    const { method } = req;
    
    switch (method) {
        case "GET":
        try {
            const prompts = await Prompt.find({});
            res.status(200).json({ success: true, data: prompts });
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
        case "POST":
        try {
            const prompt = await Prompt.create(req.body);
            res.status(201).json({ success: true, data: prompt });
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
        default:
        res.status(400).json({ success: false });
        break;
    }
    }
*/