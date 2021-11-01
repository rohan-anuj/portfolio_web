import React from 'react'
import Button from '@mui/material/Button';
import "./Projects.css";
import Machifresh from "./logo/logo .jpg"
import news from "./logo/ARTICLE.jpg"
import tasc from "./logo/tasc.jpg"
import ems from "./logo/ems.jpg"
import cuskoo from "./logo/cuskoo TEXT.jpg"



function Projects() {


        return (
                <div className='flex flex-col  justify-between items-center'>
                        <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" ><h1 className='font-bold text-gray-600 font-serif cursor-pointer border-gray-400 border-2   p-2 bg-white flex-wrap   text-2xl rounded    '> My work  {">"} </h1>
                        </div>   <div className='h-max mt-18 flex-col sm:mt-20 sm:flex-col flex-wrap md:flex-col xl:flex-row 2xl:flex-row   flex justify-evenly items-center '>
                                <div  ></div>


                                <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className='infocard shadow-xl bg-white p-5 m-10 w-96 h-max rounded flex-col items-center flex justify-between'>

                                        <img src={Machifresh} className='rounded ' alt="/" />
                                        <a href="https://machifresh-18abf.web.app" target="_blank" rel="noreferrer" > <Button variant='outlined' style={{ marginTop: "20px" }}> Click to view</Button></a>

                                 </div>

                                <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" className='infocard shadow-xl bg-white m-10 w-96 h-max  p-5  items-center flex-col rounded  flex justify-between'>
                                        <img src={news} className='rounded ' alt="/" />
                                        <a href="https://articles-b7682.web.app/" rel="noreferrer" target="_blank"> <Button variant='outlined' style={{ marginTop: "20px" }}> Click to view</Button>  </a>
                                  </div>
                                <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" className='infocard shadow-xl bg-white m-10 w-96 h-max  p-5  items-center flex-col rounded  flex justify-between'>
                                        <img src={cuskoo} className='rounded  h-32' alt="/" />
                                        <a href="https://crm-app-bf117.web.app/" rel="noreferrer" target="_blank"> <Button variant='outlined' style={{ marginTop: "20px" }}> Click to view</Button>  </a>


                                         </div>
                                       <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" className='infocard shadow-xl bg-white m-10 w-96 h-max  p-5  items-center flex-col rounded   flex justify-between'>
                                        <img src={ems} className='rounded 32 ' alt="/" />
                                        <a href="https://employms-c8870.web.app/" rel="noreferrer" target="_blank"> <Button variant='outlined' style={{ marginTop: "20px" }}> Click to view</Button>  </a>


                                       </div>
                                <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" className='infocard shadow-xl bg-white m-10 w-96 h-max  p-5  items-center flex-col rounded  flex justify-between'>
                                        <img src={tasc} className='rounded h-32 ' alt="/" />
                                        <a href="https://rohan-anuj.github.io/Mr.tasc/index.html" rel="noreferrer" target="_blank"> <Button variant='outlined' style={{ marginTop: "20px" }}> Click to view</Button>  </a>


                                </div>










                        </div>
                </div>
        )
}

export default Projects
