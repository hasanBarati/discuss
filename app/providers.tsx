"use client"

import { NextUIProvider } from '@nextui-org/react'
import React, { ReactNode } from 'react'

interface ProvidersProps{
    children:ReactNode
}
function Providers({children}:ProvidersProps) {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}

export default Providers