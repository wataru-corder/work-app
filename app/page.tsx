import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Calendar, Dumbbell, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-emerald-100 rounded-full">
            <Dumbbell className="h-12 w-12 text-emerald-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          FitTracker
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-4 mx-auto text-gray-600">
          あなたの筋トレ記録を簡単に管理
          <br />
          進歩を可視化して、目標を達成しよう
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-500 to-purple-600"
          >
            <Link href="/signup">今すぐ始める</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/signup">ログイン</Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mx-auto p-3 bg-blue-100 rounded-full w-fit mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle>進歩の可視化</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              重量、回数、セット数を記録して、あなたの成長を数値で確認できます。
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mx-auto p-3 bg-emerald-100 rounded-full w-fit mb-4">
              <Calendar className="h-8 w-8 text-emerald-600" />
            </div>
            <CardTitle>簡単記録</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              直感的なUIで、トレーニング内容を素早く記録できます。
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="mx-auto p-3 bg-purple-100 rounded-full w-fit mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <CardTitle>継続サポート</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              履歴を振り返って、モチベーションを維持しながら継続できます。
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
