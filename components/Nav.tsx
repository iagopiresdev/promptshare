'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

function Nav() {
  const isUserLoggedIn = true;

  const signOut = () => {
    {/* finish later */}
  }


  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='Logo'
          width={30} // Added width and height values
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>PromptShare</p>
      </Link>

      {/* Desktop Navigation (learn latter the mobile in tailwind */ }
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Criar Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              SignOut
            </button>

            <Link href='/profile'>
              <Image
                src='/assets/images/logo.svg'
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
                />
            </Link>
          </div>
        ) : (
          <></>
        )}


      </div>

      
    </nav>
  )
}

export default Nav