"use client"

import { useEffect } from 'react'

const ErrorPage = ({error, reset}:{
  error: Error & { digest?: string }
  reset: () => void
}) => {

    useEffect(() => {
        console.error(error)
    }, [error])
  return (
    <div>
        <h1 className='text-red-600 text-4xl'>SomeThing went worng</h1>
        <h1 className='text-red-600 text-4xl'>{error?.message}</h1>
        <div>
            <button
                onClick={() => reset()}
            >
            Try again
            </button>
        </div>
    </div>
  )
}

export default ErrorPage