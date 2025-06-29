import { Workout } from '@/types'
import { Pencil, Trash2 } from 'lucide-react'

type workoutListProps = {
  workout: Workout[]
}

const WorkoutList = ({ workout }: workoutListProps) => {
  if (workout.length === 0) {
    return <p className="text-gray-700">今日の記録はまだありません</p>
  }

  return (
    <div>
      {/* <div className="text-xl font-bold mb-4">
        {new Date(workout[0].date).toLocaleDateString('ja-JP', {
          month: 'long',
          day: 'numeric',
        })}
        の記録
      </div> */}
      <div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          {workout.map((workout) => (
            <ul className="mt-2 space-y-1 font-semibold" key={workout.id}>
              {workout.records.map((r) => (
                <li
                  key={r.id}
                  className="pb-2 flex justify-between items-center"
                >
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
      </div>
    </div>
  )
}

export default WorkoutList
