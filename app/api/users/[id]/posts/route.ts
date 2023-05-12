'use server';

import { connectDB } from "@utils/db";
import  Prompt  from "@models/prompt";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const GET = async (req: Request, { params }:Params) => {
    try {        
        await connectDB();
        const prompts = await Prompt.find({ creator: params.id }).populate('creator');
        return new Response(JSON.stringify(prompts), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 501,
        });
    }
}
