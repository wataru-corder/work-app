import { getWorkouts } from '@/lib/api'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutList from '../components/WorkoutList'

export default async function DashboardPage() {
  const workouts = await getWorkouts()

  return (
    <main className="p-6 w-[90%] max-w-[1200px] mx-auto">
      <div className="flex w-full gap-10">
        {/* トレーニング記録 */}
        <WorkoutForm />
        {/* 今日のトレーニング記録の表示 */}
        <div className="flex-1">
          <WorkoutList workout={workouts} />
        </div>
      </div>
    </main>
  )
}
