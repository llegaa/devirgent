import {createContext, ReactNode, useState} from "react";

export const SearchContext = createContext({
    searchValue: ""
})

export const UserContextProvider = ({children}: {children: ReactNode}) => {
    const [searchValue, setSearchValue] = useState("")
    return <SearchContext.Provider value={{searchValue, setSearchValue}}>
        {children}
    </SearchContext.Provider>
}