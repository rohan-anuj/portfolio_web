
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';



function Github() {





    return (
        <div className="m-10 flex flex-col justify-between items-center">
            <span>
                <a href="https://github.com/rohan-anuj" target="_blank" rel="noreferrer" ><div data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" className="flex mt-4 dark:text-white items-center border border-2 cursor-pointer rounded w-max p-2 "><GitHubIcon /><h1>rohan-anuj</h1></div></a>
              <h1 data-aos="flip-up" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" className="mt-4 dark:text-white  text-gray-400  font-bold text-2xl flex justify-between  items-center">My Github Contributions:</h1>
        
               </span>
            <img data-aos="zoom-in-down" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" src="https://ghchart.rshah.org/rohan-anuj" className="bg-white  p-5 shadow-xl" alt="rohan-anuj" />
             </div>
    )

}
export default Github