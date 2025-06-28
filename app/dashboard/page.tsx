import { getWorkouts } from '@/lib/api'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutList from '../components/WorkoutList'

export default async function DashboardPage() {
  const workouts = await getWorkouts()

  const today = new Date().toISOString().slice(0, 10)

  const todyWorkout = workouts.filter((workout) => workout.date === today)

  return (
    <main className="p-6 w-[95%] max-w-[1400px] mx-auto">
      <div className="flex gap-10 flex-col lg:flex-row">
        {/* トレーニング記録 */}
        <div className="w-full lg:w-1/3">
          <WorkoutForm />
        </div>
        {/* 今日のトレーニング記録の表示 */}
        <div className="w-full lg:w-2/3">
          <WorkoutList workout={todyWorkout} />
        </div>
      </div>
    </main>
  )
}
