'use client'

import { postWorkouts } from '@/lib/api'
import {
  Calendar,
  Dumbbell,
  Hash,
  NotebookPen,
  Plus,
  Target,
  Weight,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { DialogTitle } from './ui/dialog'

const WorkoutForm = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [exercise, setExercise] = useState('')
  const [weight, setWeight] = useState('')
  const [reps, setReps] = useState('')
  const [sets, setSets] = useState('')
  const [memo, setMemo] = useState('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const workoutId = uuid()
    const recordId = uuid()
    const workout = {
      id: workoutId,
      userId: 'u1', // 仮ユーザーID（将来的にSupabaseから取得）
      date,
      note: memo,
      records: [
        {
          id: recordId,
          exercise,
          weight: parseFloat(weight),
          reps: parseInt(reps),
          sets: parseInt(sets),
          memo,
        },
      ],
    }

    try {
      await postWorkouts(workout)

      // リセット
      setExercise('')
      setWeight('')
      setReps('')
      setSets('')
      setMemo('')
      setDate(new Date().toISOString().slice(0, 10))
      router.refresh()
    } catch (err) {
      alert('エラーが発生しました')
      console.log(err)
    }
  }

  return (
    <div>
      <DialogTitle className="text-xl font-semibold text-gray-900">
        トレーニング記録
      </DialogTitle>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            日付
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Exercise */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            種目
          </label>
          <div className="relative">
            <Dumbbell className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="ベンチプレス、スクワット、デッドリフトなど"
              required
            />
          </div>
        </div>

        {/* Weight */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            重量(kg)
          </label>
          <div className="relative">
            <Weight className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="60.0"
              required
            />
          </div>
        </div>

        {/* Reps and Sets */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              回数
            </label>
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                type="number"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="8"
                min="1"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              セット数
            </label>
            <div className="relative">
              <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                type="number"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="3"
                min="1"
                required
              />
            </div>
          </div>
        </div>

        {/* Memo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            メモ
          </label>
          <div className="relative">
            <NotebookPen className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              type="textarea"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="次は今より重量挙げれそう！"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-sm font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>記録を追加</span>
        </button>
      </form>
    </div>
  )
}

export default WorkoutForm
