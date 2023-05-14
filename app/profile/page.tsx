'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
import { Router } from "next/router";

function MyProfile() {
    const { data: session } = useSession();
    const [myPosts, setMyPosts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user?.id}/posts`);
            const data = await response.json();

            setMyPosts(data);
        }

        if(session?.user.id){
            fetchPosts();
        }
    }, [session?.user.id]); 

    const handleEdit = (myPosts):any => {
        router.push(`/update-prompt?id=${myPosts._id}`);
    }

    const handleDelete = async (myPosts) => {
        const hasConfirmed = confirm('Tem certeza que deseja deletar?');

        if(hasConfirmed){
            try {
                await fetch (`/api/prompt/${myPosts._id.toString()}`, {
                    method: 'DELETE',
                });
                const filteredPosts = myPosts.filter((post) => post._id !== myPosts._id);
                setMyPosts(filteredPosts);
                
            } catch (error) {
                console.log(error);
            }
        }
        router.push('/');
    }

  return (
    <Profile 
        name="Meu"
        desc="Bem vindo(a) ao seu perfil"
        data={myPosts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  );
};

export default MyProfile