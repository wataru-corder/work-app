import { Workout } from '@/types'
import { Dumbbell, Pencil, Trash2 } from 'lucide-react'
import { Card, CardContent } from './ui/card'

import { DialogCloseButton } from './DialogCloseButton'

type workoutListProps = {
  workout: Workout[]
}

const WorkoutList = ({ workout }: workoutListProps) => {
  if (workout.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Dumbbell className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            今日のワークアウトはまだありません
          </h3>
          <p className="text-muted-foreground text-center mb-4">
            最初のワークアウトを記録して、フィットネスジャーニーを始めましょう！
          </p>
          <div className="w-[400]">
            <DialogCloseButton />
          </div>
        </CardContent>
      </Card>
    )
  }
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      {workout.map((workout) => (
        <ul className="mt-2 space-y-1 font-semibold" key={workout.id}>
          {workout.records.map((r) => (
            <li key={r.id} className="pb-2 flex justify-between items-center">
              {r.exercise}：{r.weight}kg × {r.reps}回 × {r.sets}セット
              {r.memo}
              <span className="flex gap-4 text-gray-500">
                <button className=" hover:text-gray-800 cursor-pointer">
                  <Pencil size={16} />
                </button>
                <button className="hover:text-gray-800 cursor-pointer">
                  <Trash2 size={16} />
                </button>
              </span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default WorkoutList
