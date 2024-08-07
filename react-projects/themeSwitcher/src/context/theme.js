import React from 'react'
import { createContext, useContext } from 'react'

// function theme() {
//   return (
//     <div>theme</div>
//   )
// }

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})


export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}