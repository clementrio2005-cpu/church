import react,{ useEffect, useState } from "react";

const useMobile = (breakpoint = 768 )=>{
    const [forMobile, setForMobile] = useState()

    const handleResize = ()=>{
        const windowLength = window.innerWidth > breakpoint
        setForMobile(windowLength)
    }

    useEffect(() => {
      handleResize()
      window.addEventListener("resize",handleResize)
    
      return () => {
        window.removeEventListener("resize",handleResize)
      }
    })
    
    return [forMobile]
}



export default useMobile
