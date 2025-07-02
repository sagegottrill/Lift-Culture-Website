import { CheckCircle } from "lucide-react"

interface FormSuccessProps {
  message?: string
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null

  return (
    <div className="flex items-center space-x-2 text-green-600 text-sm mt-1">
      <CheckCircle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  )
}
