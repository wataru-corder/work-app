import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from './ui/button'
import WorkoutForm from './WorkoutForm'
import { Plus } from 'lucide-react'

export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-sm font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>ワークアウトを記録</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <WorkoutForm />
      </DialogContent>
    </Dialog>
  )
}
