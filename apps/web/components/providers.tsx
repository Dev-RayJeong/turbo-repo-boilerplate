'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { OverlayProvider } from '@toss/use-overlay'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <OverlayProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        {children}
      </NextThemesProvider>
    </OverlayProvider>
  )
}
