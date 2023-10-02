'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
////////////////////
////TYPESCRIPT//////
////////////////////

interface ShowDetailProps {
    showDetailContext: boolean
    setshowDetailContext: Dispatch<SetStateAction<boolean>>
}
///////////////////////////
////createContext/////////
///////////////////////////

const AdminContext= createContext<ShowDetailProps>({
    showDetailContext: false,
    setshowDetailContext: (): string => ''
   
})
////////////////////////////
////Provider////////////////
////////////////////////////

export const AdminContextProvider = ({ children }: any) => {
    const [showDetailContext, setshowDetailContext] = useState(false);
   
    return (              
 /// aca en GlobalContext.Provider le paso cada una de las variables que van a estar disponibles
        <AdminContext.Provider value={{ showDetailContext, setshowDetailContext }}> 
            {children}
        </AdminContext.Provider>
    )
};
///////////////////////////////
/////////useContext///////////
/////////////////////////////////
export const useAdminContext = () => useContext(AdminContext);
