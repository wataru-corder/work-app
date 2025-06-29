import { getWorkouts } from '@/lib/api'
import WorkoutList from '@/components/WorkoutList'
import { DialogCloseButton } from '@/components/DialogCloseButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Dumbbell, TrendingUp } from 'lucide-react'
import { Workout } from '@/types'

export default async function DashboardPage() {
  const workouts = await getWorkouts()

  const today = new Date().toISOString().slice(0, 10)

  const todyWorkout = workouts.filter((workout) => workout.date === today)

  const getTotalVolume = (): number => {
    const today = todyWorkout.map((t) => t.records)
    const weight = today.map((r) => r.map((t) => t.weight * t.reps * t.sets))
    const totalWeight = weight.flat().reduce((acc, curr) => acc + curr, 0)
    return totalWeight
  }
  function getCurrentStreak(workouts: Workout[]): number {
    const dateSet = new Set(
      workouts.map((w) => new Date(w.date).toDateString())
    )

    let streak = 0
    const currentDate = new Date()

    while (dateSet.has(currentDate.toDateString())) {
      streak++
      currentDate.setDate(currentDate.getDate() - 1)
    }

    return streak
  }
  return (
    <main className="p-6 w-[95%] max-w-[1300px] mx-auto">
      <div className="mb-8 flex justify-between gap-10">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">ダッシュボード</h1>
          <p className="text-muted-foreground">
            {new Date().toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}
          </p>
        </div>
        <div>
          <DialogCloseButton />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              今日のワークアウト
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todyWorkout.length}</div>
            <p className="text-xs text-muted-foreground">
              記録されたワークアウト
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              連続トレーニング日数
            </CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {getCurrentStreak(workouts)}日
            </div>
            <p className="text-xs text-muted-foreground">最近の記録</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">累計重量</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {getTotalVolume().toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">kg (最近の記録)</p>
          </CardContent>
        </Card>
      </div>

      {/* 今日のトレーニング記録の表示 */}
      <div className="w-full">
        <WorkoutList workout={todyWorkout} />
      </div>
    </main>
  )
}
