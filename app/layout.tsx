import React from 'react';
import '@styles/globals.css';
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: 'PromptShare',
    description: 'Discover and Share AI Prompts'
}

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pt-BR'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
              <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;
