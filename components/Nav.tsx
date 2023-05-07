'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders, ClientSafeProvider } from 'next-auth/react';

function Nav() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);
  const [dropdown, setDropdown] = useState(false);

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
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Criar
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Desconectar
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image ?? '/assets/images/logo.svg'}
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
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image ?? '/assets/images/logo.svg'}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setDropdown((prev) => !prev)}
            />

            {dropdown && (
              <div className='dropdown'>
                <Link 
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setDropdown(false)}
                >
                  Meu Perfil
                </Link>
                <Link 
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setDropdown(false)}
                >
                  Criar
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setDropdown(false)
                    signOut()
                  }}
                  className='mt-5 w-full black_btn'
                  >
                    Desconectar
                  </button>
              </div>
            )}
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
