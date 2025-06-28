import { getWorkouts } from '@/lib/api'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutList from '../components/WorkoutList'

export default async function DashboardPage() {
  const workouts = await getWorkouts()

  return (
    <main className="p-6 w-[95%] max-w-[1400px] mx-auto">
      <div className="flex w-full gap-10">
        {/* トレーニング記録 */}
        <div className="w-1/3">
          <WorkoutForm />
        </div>
        {/* 今日のトレーニング記録の表示 */}
        <div className="w-2/3">
          <WorkoutList workout={workouts} />
        </div>
      </div>
    </main>
  )
}
