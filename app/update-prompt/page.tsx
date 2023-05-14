'use client'

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import Form from "@components/Form"

//gpt is my savior
declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      image: string;
      id: string;
    }
  }
}

function EditPrompt() {
    const router = useRouter();
    const [submit, setsubmit] = useState(false);
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');
    const [post, setpost] = useState({
        prompt: '',
        tag: '',
    });

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();

            setpost({
                prompt: data.prompt,
                tag: data.tag,
            });
        }
        if(promptId) getPromptDetails();

    }, [promptId])

    
    const updatePrompt = async (e:any) => {
      e.preventDefault();
      setsubmit(true);

      if(!promptId) return alert('Prompt não encontrado');

      try {
        const response = await fetch(`./api/prompt/${promptId}`, {
          method: 'PATCH',
          body: JSON.stringify({
            prompt: post.prompt, 
            tag: post.tag
          }),
        });

        if (response.ok) {
          router.push('/')
        }

      } catch (error) {
        console.log(error);
        
      } finally {
        setsubmit(false);
      }
    }

    return (
        <Form
            type="Editar"
            post={post}
            setPost={setpost}
            submit={submit}
            handleSubmit={updatePrompt} 
        />
    )
}

export default EditPrompt