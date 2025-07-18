import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const mockUser = {
    email: 'test@gmail.com',
    password: 'password123',
  }

  if (email === mockUser.email && password === mockUser.password) {
    return NextResponse.json({ message: 'ログイン成功' }, { status: 200 })
  } else {
    return NextResponse.json({ message: '認証失敗' }, { status: 401 })
  }
}
