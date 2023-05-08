import { motion } from 'framer-motion'
import React from 'react'

const Hero = ({ heading, message }) => {
    return (
        <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.75 }}
            className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 z-[2] bg-black/70' />
            <div className='p-5 text-white z-[2] mt-[-10rem]'>
                <h1 className='text-5xl font-bold'>{heading}</h1>
                <p className='py-5 text-xl'>{message}</p>
                <button className='px-8 py-2 border'>Book</button>
            </div>

        </motion.div>
    )
}

export default Hero