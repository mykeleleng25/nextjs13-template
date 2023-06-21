'use client'

import { useState } from 'react'

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <>
      <main className='flex flex-col items-center justify-between min-h-screen p-24'>
        {/* <h1>Children</h1> */}
      </main>
    </>
  )
}
