'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders, ClientSafeProvider } from 'next-auth/react';

function Nav() {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);;

  useEffect(() => {
    const resProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    resProvider();
  }, [])

  const signOut = () => {
    // finish later
  }

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='Logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>PromptShare</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Criar Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Desconectar
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
          <>
            {providers && 
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Entrar
                </button>
              ))
            }
          </>
        )}
      </div>

      {/* Mobile nav */}
      <div className='sm:hidden relative'>
        {isUserLoggedIn ? (
          <div className='flex'>
            <Image
              src='/assets/images/logo.svg'
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              //onClick={}
            />
          </div>
        ) : (
          <>
            {providers && 
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Entrar
                </button>
              ))
            }
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
