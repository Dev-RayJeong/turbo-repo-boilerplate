import '@workspace/ui/globals.css'
import { pretendard } from '@/styles/fonts/fonts'

export default function NotFoundLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pretendard.variable} font-pretendard`}>
        {children}
      </body>
    </html>
  )
}
