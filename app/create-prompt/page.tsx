'use client'

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Form from "@components/Form"

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

      try {
        const response = await fetch('/api/prompt/new', {
          method: 'POST',
          body: JSON.stringify({
            prompt: post.prompt, 
            userId: session?.user,
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