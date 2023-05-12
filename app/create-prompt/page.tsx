'use client'

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
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

function CreatePrompt() {
    const router = useRouter();
    const { data: session } = useSession();
    const [submit, setsubmit] = useState(false);
    const [post, setpost] = useState({
        prompt: '',
        tag: '',
    });

    const createPrompt = async (e:any) => {
      e.preventDefault();
      setsubmit(true);

      //console.log(session?.user);
      //console.log(session?.user.id);

      try {
        const response = await fetch('./api/prompt/new', {
          method: 'POST',
          body: JSON.stringify({
            userId: session?.user.id,
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
        type="Create"
        post={post}
        setPost={setpost}
        submit={submit}
        handleSubmit={createPrompt} 
    />
  )
}

export default CreatePrompt