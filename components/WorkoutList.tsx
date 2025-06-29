import { Workout } from '@/types'
import { Dumbbell, Edit, Hash, RotateCcw, Trash2, Weight } from 'lucide-react'
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
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 border-l-4 border-l-blue-500">
      {workout.map((workout, i) => (
        <ul className=" space-y-1 font-semibold" key={workout.id}>
          <div className="border-b pb-4 flex items-center justify-between">
            <div>
              <span className="text-sm bg-gray-100 px-2 py-1 rounded-sm">
                {i + 1}種目
              </span>
            </div>
            <div className="flex gap-3">
              <Edit className="h-4 w-4" />
              <Trash2 className="h-4 w-4 text-red-500" />
            </div>
          </div>
          {workout.records.map((r) => (
            <li
              className="p-3 bg-muted/30 rounded-lg flex flex-col gap-3 mb-5"
              key={r.id}
            >
              <div className="flex items-center gap-3 text-sm justify-between">
                <div>{r.exercise}</div>
                <div className="flex">
                  <div className="flex items-center gap-1">
                    <Weight className="h-3 w-3" />
                    <span className="font-mono">{r.weight}kg</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <RotateCcw className="h-3 w-3" />
                    <span className="font-mono">{r.reps}回</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Hash className="h-3 w-3" />
                    <span className="font-mono">{r.sets}セット</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default WorkoutList
