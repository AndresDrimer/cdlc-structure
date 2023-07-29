'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
////////////////////
////TYPESCRIPT//////
////////////////////
type DataType = {
    firstName: string
}

interface ContextProps {
    isDigital: boolean
    setIsDigital: Dispatch<SetStateAction<boolean>>
}
///////////////////////////
////createContext/////////
///////////////////////////

const GlobalContext = createContext<ContextProps>({
    isDigital: false,
    setIsDigital: (): string => ''
   
})
////////////////////////////
////Provider////////////////
////////////////////////////

export const GlobalContextProvider = ({ children }: any) => {
    const [isDigital, setIsDigital] = useState(true);
   
    return (              
 /// aca en GlobalContext.Provider le paso cada una de las variables que van a estar disponibles
        <GlobalContext.Provider value={{ isDigital, setIsDigital }}> 
            {children}
        </GlobalContext.Provider>
    )
};
///////////////////////////////
/////////useContext///////////
/////////////////////////////////
export const useGlobalContext = () => useContext(GlobalContext);
