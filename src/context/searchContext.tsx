import { createContext, ReactNode, useState } from "react";

interface SearchContextType {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType>({
    searchValue: "",
    setSearchValue: () => {}
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContext.Provider>
    );
};