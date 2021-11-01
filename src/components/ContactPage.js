import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


function ContactPage() {
    return (
        <div className="flex items-center shadow-xl flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row mt-20 p-10 justify-evenly">
            <h2 data-aos="fade-left" data-aos-delay="50"  data-aos-duration="1000" data-aos-easing="ease-in-out" className='dark:text-white font-bold text-2xl flex justify-between  items-center'>Contact  <h2 className='text-blue-600'>me:-</h2></h2>
            <div>
            <Box 
      component="form"
      className="flex flex-col dark:bg-white rounded  p-10  justify-between items-center"
      data-aos="fade-Zoomin" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out"
      
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
    
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out"  label="Name" variant="outlined" />
      <TextField id="filled-basic" data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" type="email" label="Email-id" variant="outlined" />
      <TextField id="standard-basic"  data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" multiline
          rows={4} label="Message" variant="outlined" />
      <Button variant="contained" data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" endIcon={<SendIcon />}>
        Send Message 
      </Button>

   </Box>
              
            </div>

            
        </div>
    )
}

export default ContactPage
