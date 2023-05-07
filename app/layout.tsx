import React from 'react';
import '@styles/globals.css';
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import  RootLayoutProps  from '../types/RootLayoutProps';

export const metadata = {
    title: 'PromptShare',
    description: 'Discover and Share AI Prompts'
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pt-BR'>
        <body>
          <Provider>
              <div className='main'>
                  <div className='gradient' />
              </div>
              
              <main className='app'>
                <Nav />
                  {children}
              </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;
