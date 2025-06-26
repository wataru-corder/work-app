import { Workout } from '@/types'

type workoutListProps = {
  workout: Workout[]
}

const WorkoutList = ({ workout }: workoutListProps) => {
  return (
    <div>
      {workout.map((workout) => (
        <div
          key={workout.id}
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
        >
          <div className="text-xl font-bold mb-4">今日の記録</div>

          <p className="font-semibold">
            {workout.date} - {workout.note}
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            {workout.records.map((r) => (
              <li key={r.id}>
                {r.exercise}：{r.weight}kg × {r.reps}回 × {r.sets}セット（
                {r.memo}）
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default WorkoutList
