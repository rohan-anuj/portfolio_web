import React, {useState} from 'react'
import Button from '@mui/material/Button';
import "./Projects.css";
import Machifresh from "./logo/logo .jpg"
import news from "./logo/ARTICLE.jpg"



function Projects() {
    
    
    return (
        <div className='flex flex-col justify-between items-center'>
            <h1 className='font-bold text-gray-600 font-serif cursor-pointer border-gray-400 border-2   p-2 bg-white   text-2xl rounded    '> My work  {">"} </h1>
        <div className='h-max mt-18 flex-col sm:mt-20 sm:flex-col flex-wrap md:flex-col xl:flex-row 2xl:flex-row   flex justify-evenly items-center '>
            <div  ></div>
          
         
<div className='infocard shadow-xl bg-white p-5 m-10 w-96 h-max rounded flex-col items-center flex justify-between'>

        <img src={Machifresh} className='rounded w-96 h-48' alt="/"/>
       <a href="https://machifresh-18abf.web.app" target="_blank" rel="noreferrer" > <Button variant='outlined'  style={{marginTop:"20px"}}> Click to view</Button></a>
        
        
        {/* <Button   variant="outlined"><a href='http://WWW.google.com' rel="noreferrer" target="_blank" >View website</a></Button>  */}


    
    



</div>
         
<div className='infocard shadow-xl bg-white m-10 w-96 h-max  p-5  items-center flex-col rounded  flex justify-between'>
        <img src={news} className='rounded w-96 h-48' alt="/"/>
        <Button variant='outlined'  style={{marginTop:"20px"}}> Click to view</Button>
        
        
        {/* <Button   variant="outlined"><a href='http://WWW.google.com' rel="noreferrer" target="_blank" >View website</a></Button>  */}


  
    



</div>
         


            
            
        </div>
        </div>
    )
}

export default Projects
