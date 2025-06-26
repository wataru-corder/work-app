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
    <main className="p-6">
      <div className="flex">
        {/* トレーニング記録 */}
        <WorkoutForm onPostSuccess={loadWorkouts} />
        {/* 今日のトレーニング記録の表示 */}
        <WorkoutList workout={workouts} />
      </div>
    </main>
  )
}
