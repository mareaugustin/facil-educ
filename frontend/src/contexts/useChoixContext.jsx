import React, {useState, useContext, createContext} from "react";

const ChoixContext = createContext()

export function StatutProvider({children}){
    const [choix, setChoix] =useState(null)
    const [ecole, setEcole] = useState(null)
    const [ecoleC, setEcoleC] = useState(null)
    const [ecoleL, setEcoleL] = useState(null)
    const [ecoleP, setEcoleP] = useState(null)
    const [classe, setClasse] = useState(null)
    const [primaire, setPrimaire] = useState(null)
    const [lycee, setLycee] = useState(null)
    const [college, setCollege] = useState(null)

    return(
        <ChoixContext.Provider value={{choix,ecoleC, setEcoleC,ecoleL, setEcoleL, setChoix,ecoleP, setEcoleP, ecole, setEcole, classe, setClasse, college, setCollege, lycee, setLycee, primaire, setPrimaire}} >
            {children}
        </ChoixContext.Provider >
    )
}

export function useChoixContext(){
    return useContext(ChoixContext)
}