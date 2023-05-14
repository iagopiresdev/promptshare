'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

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

    //const handleDelete = async (post) => {
    //}

  return (
    <Profile 
        name="Meu"
        desc="Bem vindo(a) ao seu perfil"
        data={myPosts}
        handleEdit={handleEdit}
        //handleDelete={handleDelete}
    />
  );
};

export default MyProfile