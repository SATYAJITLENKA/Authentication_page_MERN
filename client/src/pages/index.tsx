import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full h-screen grid place-items-center '>
      <div className='p-4 bg-accentDark text-white h-[200px] w-[200px] text-center space-y-4'>
        <p>Satyajit Lenka</p>
        <button className='bg-accent p-2 rounded-md'>LogOut</button>
      </div>
    </main>
  )
}
