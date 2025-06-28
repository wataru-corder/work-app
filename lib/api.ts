import { Workout } from '@/types'

const API_URL = 'http://localhost:4000'

export async function fetchWorkouts(): Promise<Workout[]> {
  const res = await fetch(`${API_URL}/workouts`)
  return res.json()
}
