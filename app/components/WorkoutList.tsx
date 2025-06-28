import { Workout } from '@/types'

type workoutListProps = {
  workout: Workout[]
}

const WorkoutList = ({ workout }: workoutListProps) => {
  if (workout.length === 0) {
    return <p className="text-gray-700">今日の記録はまだありません</p>
  }
  return (
    <div>
      <div className="text-xl font-bold mb-4">今日の記録 </div>
      <div>
        {workout.map((workout) => (
          <div
            key={workout.id}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <p className="font-semibold">{workout.date}</p>
            <ul className="mt-2 space-y-1 text-sm">
              {workout.records.map((r) => (
                <li key={r.id}>
                  {r.exercise}：{r.weight}kg × {r.reps}回 × {r.sets}セット
                  {r.memo}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkoutList
