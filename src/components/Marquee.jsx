import { motion } from 'framer-motion' //just write "motion" in return fun to get this line
import React from 'react' //Rafc

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-red-600 '>      
        <div className='text border-t-2 border-b-2 border-zinc-300 overflow-hidden flex whitespace-nowrap'>
            <motion.h1 
              initial={{x:"0"}} 
              animate={{x: "-100%"}} 
              transition={{repeat: Infinity, ease:"linear", duration:10}} 
              className='text-[24vw] loading-none font-["Founders_Grotesk_X_Condensed"]
             uppercase pt-10 -mb-[7vw] font-semibold pr-20'>
             We are Ochi
             </motion.h1>

            <motion.h1 
            initial={{x:"0"}} 
            animate={{x: "-100%"}} 
            transition={{repeat: Infinity,ease:"linear", duration:10}} 
            className='text-[24vw] loading-none font-["Founders_Grotesk_X_Condensed"]
             uppercase pt-10 -mb-[7vw] font-semibold pr-20'>
             We are Ochi
             </motion.h1>
        </div>
    </div>
  )
}


export default Marquee
