import '@workspace/ui/globals.css'
import { pretendard } from '@/styles/fonts/fonts'

function NotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pretendard.variable} font-pretendard`}>
        <div>NotFound</div>
      </body>
    </html>
  )
}

export default NotFound
