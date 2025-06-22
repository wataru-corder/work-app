import { Workout } from '@/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

export async function fetchWorkouts(): Promise<Workout[]> {
  const res = await fetch(`${API_URL}/workouts`)
  if (!res.ok) {
    throw new Error('取得失敗')
  }
  return res.json()
}

export async function crateWorkouts(date: Workout): Promise<Workout[]> {
  const res = await fetch(`${API_URL}/workouts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(date),
  })
  if (!res.ok) {
    throw new Error('作成に失敗')
  }
  return res.json()
}

export async function updateWorkouts(
  id: string,
  date: Workout
): Promise<Workout[]> {
  const res = await fetch(`${API_URL}/workouts`)
  if (!res.ok) {
    throw new Error('取得失敗')
  }
  return res.json()
}
