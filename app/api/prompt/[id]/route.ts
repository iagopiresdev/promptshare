'use server';
import { connectDB } from "@utils/db";
import  Prompt  from "@models/prompt";

// GET, PATCH, DELETE
export const GET = async (req: Request,{ params }:any) => {
    try {
        await connectDB();

        const prompt = await Prompt.findById(params.id).populate('creator');
        if(!prompt) {
            return new Response(JSON.stringify({ message: 'Prompt not found' }), {
                status: 404,
            });
        }
        return new Response(JSON.stringify(prompt), {
            status: 200,
        });

    } catch (error) {
        return new Response(JSON.stringify({ message: 'Falha no fetch de prompt' }), {
            status: 500,
        });
    }
}

export const PATCH = async (req:Request, { params }:any) => {
    const { prompt, tag } = await req.json();
    try {
        await connectDB();

        const existingPrompt = await Prompt.findById(params.id);
        if(!existingPrompt) return new Response ('Prompt não encontrado', { status: 404 })

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
            
        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), {
            status: 200,
        });
        
    } catch (error) { 
        return new Response(JSON.stringify({ message: 'Falha no update de prompt' }), {
            status: 500,
        });
    }
}

export const DELETE = async (req:Request, { params }:any) => {
    try {
        await connectDB();
        await Prompt.findByIdAndDelete(params.id);
        return new Response(JSON.stringify({ message: 'Prompt deletado com sucesso' }), { status: 200 }); 
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Falha no delete de prompt' }), {
            status: 500,
        }); 
    }
}

