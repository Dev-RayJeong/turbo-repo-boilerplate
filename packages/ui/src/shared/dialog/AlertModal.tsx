import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@workspace/ui/components/ui/alert-dialog'

interface AlertModalProps {
  open: boolean
  title?: string
  description: string
  onConfirm: () => Promise<void> | void
}

function AlertModal({ open, title, description, onConfirm }: AlertModalProps) {
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
          <AlertDialogAction onClick={onConfirm}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertModal
