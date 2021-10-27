import  {useEffect} from 'react'

function useClass(value) {
    useEffect(()=>{
        const root=window.document.documentElement;
        const ch=document.getElementById("switch")
        if(value==="dark")
        {
            root.classList.remove("light")
            root.classList.add(value)
          ch.classList.add("switch-border")

        }
        else{
            root.classList.remove("dark")
            root.classList.add(value)
            ch.classList.remove("switch-border")
            
        }
        
    
    },[value])
    
}

export default useClass
