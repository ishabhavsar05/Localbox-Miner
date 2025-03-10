import { createContext, useState } from "react";


export const Themecontext=createContext()

export function ThemecontextProvider({children})
      
{
    const[flag,setflag]=useState(false);

    const handleToggleTheme=()=>{
        setflag(!flag)
    }
    return(
        <Themecontext.Provider value={{flag,handleToggleTheme}}>
            {children}
        </Themecontext.Provider>
    )
}