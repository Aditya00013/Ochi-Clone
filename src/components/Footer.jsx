import React from 'react'

function Footer () {
  return (
    <div className='w-full flex gap-5 h-screen bg-zinc-900 p-20 font-["Founders_Grotesk_X_Condensed"]'>
        <div className='w-1/2 h-full flex flex-col justify-between '>
            <div className='heading'>
                <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10'>Eye-</h1>
                <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10'>Opening</h1>
            </div>
        </div>
        <div className='w-1/2'>
            <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-10'>
            Presentations
            <div className='dets font-["Neue_Montreal"]'>
                <a className='block text-xl font-light' href="#">Facebook</a>
                <a className='block text-xl font-light' href="#">Instagram</a>
                <a className='block text-xl font-light' href="#">Twitter</a>
            </div>
            </h1>
        </div>
    </div>
  )
}

export default Footer
