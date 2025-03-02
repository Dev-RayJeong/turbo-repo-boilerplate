import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@workspace/ui/components/ui/alert-dialog'

export interface AlertModalProps {
  open: boolean
  title?: string
  description: string
  onConfirm: () => Promise<void> | void
  onCancel: () => Promise<void> | void
  confirmText: string
}

function ConfirmModal({
  open,
  title,
  description,
  onCancel,
  onConfirm,
}: AlertModalProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          {title ? (
            <AlertDialogTitle>{title}</AlertDialogTitle>
          ) : (
            <VisuallyHidden asChild>
              <AlertDialogTitle>{title}</AlertDialogTitle>
            </VisuallyHidden>
          )}

          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>취소</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmModal
