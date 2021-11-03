import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton';




import SendIcon from '@mui/icons-material/Send';
import axios from "axios"



function ContactPage() {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [Message,setMessage]=useState()
  const [response,setResponse]=useState()
  const [open,setOpen]=useState(false)
  const [err,setErr]=useState(false)
  
  

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!name){
      Alert("Name required")
    }
    else{
    axios.post("https://portolio-api.herokuapp.com/Guests",{name:name,Email:email,Message:Message})
    .then(res=>setResponse(res.data))
    .catch(err=>setResponse(err))

  if(response==="message Sended!"){
    setOpen(true)
    setErr(false)
    
  }
  else{
    setErr(true)
    setOpen(false)

  }
    }

  }
  
  
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
    
      autoComplete="off"
    >
      <TextField id="outlined-basic" data-aos="fade-left" value={name} validate onChange={e=>setName(e.target.value)} data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out"  label="Name" variant="outlined" />
      <TextField id="filled-basic" data-aos="fade-right" value={email} validate onChange ={e=>setEmail(e.target.value)} data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" type="email" label="Email-id" variant="outlined" />
      <TextField id="standard-basic"  onChange={e=>setMessage(e.target.value)}  validate  value={Message} data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" multiline
          rows={4} label="Message" variant="outlined" />
      <Button variant="contained" data-aos="fade-right" data-aos-delay="50"  onClick={handleSubmit} data-aos-duration="2000" data-aos-easing="ease-in-out" endIcon={<SendIcon />}>
        Send Message 
      </Button>
   <Box   style={{position:"absolute"}}>
      <Collapse in={err}>
      <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setErr(false);
              }}
              
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          
          
        severity='error'
        >
          data Loading...
          
        </Alert>  
      </Collapse>
      <Collapse in={open}>
      <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                setName("")
                setEmail("")
                setMessage("")
              }}
              
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          
          
        severity='success'
        >
        Message Sended Successfully!
          
        </Alert> 
      </Collapse>
      </Box>
   


   </Box>
              
            </div>

            
        </div>
    )
}

export default ContactPage
