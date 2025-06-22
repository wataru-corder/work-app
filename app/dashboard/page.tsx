'use client'
import { useEffect, useState } from 'react'
import { fetchWorkouts } from '@/lib/api'
import { Workout } from '@/types'
import WorkoutForm from '../components/WorkoutForm'

export default function DashboardPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([])

  useEffect(() => {
    fetchWorkouts().then(setWorkouts).catch(console.error)
  }, [])

  return (
    <main className="p-6">
      {workouts.map((workout) => (
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

      {/* トレーニング記録 */}
      <WorkoutForm />
    </main>
  )
}
