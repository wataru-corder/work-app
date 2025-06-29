import { getWorkouts } from '@/lib/api'
import WorkoutList from '@/components/WorkoutList'
import { DialogCloseButton } from '@/components/DialogCloseButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Dumbbell, TrendingUp } from 'lucide-react'

export default async function DashboardPage() {
  const workouts = await getWorkouts()

  const today = new Date().toISOString().slice(0, 10)

  const todyWorkout = workouts.filter((workout) => workout.date === today)

  const todayWorkouts = () => {}
  const getTotalWorkouts = () => {}
  const getTotalVolume = () => {}
  return (
    <main className="p-6 w-[95%] max-w-[1400px] mx-auto">
      <div className="">
        <h1 className="text-3xl font-bold">ダッシュボード</h1>
        <p className="text-muted-foreground">
          {new Date().toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
        </p>
        <DialogCloseButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              今日のワークアウト
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {todayWorkouts.length} */}
            </div>
            <p className="text-xs text-muted-foreground">
              記録されたワークアウト
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              総ワークアウト数
            </CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {/* {getTotalWorkouts()} */}
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
              {/* {getTotalVolume().toLocaleString()} */}
            </div>
            <p className="text-xs text-muted-foreground">kg (最近の記録)</p>
          </CardContent>
        </Card>
      </div>

      {/* 今日のトレーニング記録の表示 */}
      <div className="w-full lg:w-2/3">
        <WorkoutList workout={todyWorkout} />
      </div>
    </main>
  )
}
