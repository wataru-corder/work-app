'use client'
import { useEffect, useState } from 'react'
import { fetchWorkouts } from '@/lib/api'
import { Workout } from '@/types'

export default function DashboardPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([])

  useEffect(() => {
    fetchWorkouts().then(setWorkouts).catch(console.error)
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">今日のトレーニング記録</h1>
      {workouts.map((workout) => (
        <div key={workout.id} className="mb-4 p-4 border rounded-xl shadow">
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
    </main>
  )
}
