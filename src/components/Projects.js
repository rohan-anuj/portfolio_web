import React from 'react'
import Button from '@mui/material/Button';


function Projects() {
    return (
        <div className='h-max mt-10 flex-col sm:mt-20 sm:flex-col md:flex-col xl:flex-row 2xl:flex-row   flex justify-evenly items-center '>
          
          <div  className='m-10  w-11/12 h-11/12  flex justify-between items-center  flex-col border-2'>  <h1 className='font-extrabold  text-xl text-blue-500 dark:text-blue-500'>View My Work</h1>
            <Button   variant="outlined">View More</Button>
            </div>
<div className='w-11/12 h-11/12  flex justify-between h-max'>
    <div className='w-92 rounded flex flex-col shadow-xl bg-white hover:opacity-25  justify-between m-10 p-5  items-center    '>
        <h1 className='font-bold m-5 text-blue-600'>Machifresh</h1>
        <h2 className='font-bold m-5 text-blue-600'>A mernStack full stack e-commerce website</h2>
        <Button   variant="outlined"><a href='http://WWW.google.com' rel="noreferrer" target="_blank" >View website</a></Button>

    </div>



</div>
            
            
        </div>
    )
}

export default Projects
