import React from 'react'
import { PROJECTS } from '../Costants'
import { animate, motion } from "framer-motion"
function Projects() {
  return (
    <div className='pb-4 border-b border-neutral-900'>
      <motion.h1 
       whileInView={{opacity:1, y: 0}} 
       initial={{opacity:0, y: -100}}
       transition ={{duration:1.5}}
      className='text-center text-4xl my-20'>Projects</motion.h1>
      <div>
            {PROJECTS.map((projects, index)=>(
                  <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                        whileInView={{opacity:1, x: 0}} 
                        initial={{opacity:0, x: -100}}
                        transition ={{duration:1.5}}
                        className='w-ful lg:w-1/4'> 
                        <video autoPlay muted loop src={projects.image} className='rounded-lg mb-6' alt={projects.title} width={150} height={150} ></video>
                        {/* <img src={projects.image} className='rounded-lg mb-6' alt={projects.title} width={150} height={150} /> */}
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity:1, x: 0}} 
                        initial={{opacity:0, x: 100}}
                        transition ={{duration:1.5}}
                        className='w-ful max-w-lg lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{projects.title}</h6>
                        <p className='mb-4 text-neutral-400'>{projects.description}</p>
{projects.technologies.map((technology, index)=>(
                              <span key={index} className='px-2 py-1 bg-neutral-900 mr-2 mt-4 rounded text-sm font-medium text-purple-800'>{technology}</span>    
))}
                        </motion.div>
                  </div>
            ))}
      </div>
    </div>
  )
}

export default Projects
