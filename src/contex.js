import {createContext,useContext,useState} from "react"

const template=createContext()

const Contex=({children})=>{

    const[words,setWords]=useState(["Mahammad","Ahammad"])

   return( <template.Provider value={{words}}>
        {children}
    </template.Provider>
   )



}

const useValue=()=>{
    const val=useContext(template)
    return val
   }

export {useValue}


export default Contex