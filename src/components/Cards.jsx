import React from 'react'

function Cards () {
  return (
    <div className='w-full  p-14 h-screen bg-zinc-100 flex items-center gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card  relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
                <button className='absolute px-5 py-1 rounded-full left-10 border-2 bottom-10'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer gap-5 w-1/2 h-[50vh] flex'>
            <div className='card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
            <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
                <button className='absolute px-5 py-1 rounded-full left-10 border-2 bottom-10'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='card relative  rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
            <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
                <button className='absolute px-5 py-1 rounded-full left-10 border-2 bottom-10'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
