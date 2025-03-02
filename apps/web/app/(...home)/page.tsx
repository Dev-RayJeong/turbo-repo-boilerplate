'use client'
import { useOverlay } from '@toss/use-overlay'
import { Button } from '@ui/shared/button'
import AlertModal from '@ui/shared/dialog/AlertModal'

import Container from '@ui/shared/layout/Container'

export default function Page() {
  const overlay = useOverlay()

  const openAlert = () => {
    return overlay.open(({ isOpen, close, exit }) => (
      <AlertModal
        description="모달의 설명글입니다"
        open={isOpen}
        onConfirm={close}
      />
    ))
  }

  return (
    <Container className="min-h-">
      {/* <div className="flex min-h-svh items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4"> */}
      <h1 className="text-2xl font-bold">Hello World</h1>

      <Button size="sm" onClick={openAlert} aria-hidden={false}>
        Button
      </Button>
      {/* </div>
      </div> */}
    </Container>
  )
}
