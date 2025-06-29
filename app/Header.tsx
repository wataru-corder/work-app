import React from 'react'
import { Button } from '../components/ui/button'

const Header = () => {
  return (
    <div>
      <header className="border-b border-gray-400">
        <div className="w-[95%] w-max[1400px]mx-auto flex justify-between items-center  px-10 h-20">
          <h1 className="font-bold text-xl">Fitness Journey</h1>
          <div>
            <Button>ログアウト</Button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
