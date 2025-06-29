import React from 'react'
import { Button } from '../components/ui/button'

const Header = () => {
  return (
    <div>
      <header className="border-b border-gray-400">
        <div className="w-[75%] mx-auto flex justify-between items-center  px-10 h-20">
          <h1 className="font-bold text-xl">Logo</h1>
          <div>
            <Button>ログアウト</Button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
