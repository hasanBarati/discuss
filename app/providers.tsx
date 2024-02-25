"use client"

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

interface ProvidersProps{
    children:ReactNode
}
function Providers({children}:ProvidersProps) {
  return (
    <SessionProvider>
    <NextUIProvider>
        {children}
    </NextUIProvider>
    </SessionProvider>

  )
}

export default Providers