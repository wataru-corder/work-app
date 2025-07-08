import SignInForm from '@/components/auth/SignInForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-full max-w-md space-y-6">
          <SignInForm />
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              アカウントをお持ちでないですか？
            </p>
            <Button asChild variant="link">
              <Link href="/signup">新規登録はこちら</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
