'use client'

import { editWorkouts } from '@/lib/api'
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
import { DialogTitle } from './ui/dialog'
import { Workout } from '@/types'

type workoutListProps = {
  workout: Workout
}

const EditWorkoutForm = ({ workout }: workoutListProps) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [exercise, setExercise] = useState(workout.records[0].exercise)
  const [weight, setWeight] = useState(workout.records[0].weight)
  const [reps, setReps] = useState(workout.records[0].reps)
  const [sets, setSets] = useState(workout.records[0].sets)
  const [memo, setMemo] = useState(workout.records[0].memo)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const updatedWorkout: Workout = {
      id: workout.id,
      userId: workout.userId, // 仮ユーザーID（将来的にSupabaseから取得）
      date,
      note: memo,
      records: [
        {
          id: workout.records[0].id,
          exercise,
          weight: parseFloat(weight.toString()),
          reps: parseInt(reps.toString()),
          sets: parseInt(sets.toString()),
          memo,
        },
      ],
    }

    try {
      await editWorkouts(updatedWorkout.id, updatedWorkout)
      alert('編集完了しました')
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
              onChange={(e) => setWeight(Number(e.target.value))}
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
                onChange={(e) => setReps(Number(e.target.value))}
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
                onChange={(e) => setSets(Number(e.target.value))}
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

export default EditWorkoutForm
