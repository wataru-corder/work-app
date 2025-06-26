import { Workout } from '@/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

export async function fetchWorkouts(): Promise<Workout[]> {
  const res = await fetch(`${API_URL}/workouts`)
  if (!res.ok) {
    throw new Error('取得失敗')
  }
  return res.json()
}
