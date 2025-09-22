"use client"

import { useRouter } from "next/navigation"



const Home = () => {
  const router = useRouter()
  const handelNevigation = ()=>{
    router.push("/dashboard")
  }
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <h1 className="text-2xl text-center ">Hello nextjs</h1>
      <button onClick={handelNevigation}>Dashboard</button>
    </div>
  )
}

export default Home