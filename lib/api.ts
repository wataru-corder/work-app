import { Workout } from '@/types'

const API_URL = 'http://localhost:4000'

export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch(`${API_URL}/workouts`)
  return res.json()
}

export async function postWorkouts(workout: Workout) {
  const res = await fetch(`${API_URL}/workouts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(workout),
  })
  return res.json()
}
export async function deleteWorkouts(id: string) {
  const res = await fetch(`${API_URL}/workouts/${id}`, {
    method: 'DELETE',
  })
  return res.json()
}
