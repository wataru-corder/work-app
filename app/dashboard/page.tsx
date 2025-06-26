'use client'
import { useEffect, useState } from 'react'
import { fetchWorkouts } from '@/lib/api'
import { Workout } from '@/types'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutList from '../components/WorkoutList'

export default function DashboardPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([])

  const loadWorkouts = async () => {
    try {
      const data = await fetchWorkouts()
      setWorkouts(data)
    } catch (err) {
      alert('取得失敗')
      console.log(err)
    }
  }

  useEffect(() => {
    loadWorkouts()
  }, [])

  return (
    <main className="p-6 w-[90%] max-w-[1200px] mx-auto">
      <div className="flex w-full gap-10">
        {/* トレーニング記録 */}
        <WorkoutForm onPostSuccess={loadWorkouts} />
        {/* 今日のトレーニング記録の表示 */}
        <div className="flex-1">
          <WorkoutList workout={workouts} />
        </div>
      </div>
    </main>
  )
}
