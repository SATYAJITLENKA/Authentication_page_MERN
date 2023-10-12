import Image from 'next/image'

export default function Home() {
  return (
   <main className='w-full h-screen flex justify-center items-center'>

    <div className='p-4 bg-accentDark text-white w-[400px] h-[250px] text-center space-y-4 '>
      <p>Hi,Welcome</p>
      <p></p>
      <button  className='bg-accent px-4 py-2 text-white'>Logout</button>
    </div> 
  
   </main>
  )
}