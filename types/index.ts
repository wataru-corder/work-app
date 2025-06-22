//1種目分の記録
export type WorkoutRecord = {
  id: string
  exercise: string
  weight: number
  reps: number
  sets: number
  memo?: string
}

//1日のトレーニング記録
export type Workout = {
  id: string
  userId: string
  date: string
  note?: string
  records: WorkoutRecord[]
}
