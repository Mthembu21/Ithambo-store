import React, {createContext, useState} from "react"

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [searchTerm, setSearchTerm] = useState("")

    const SearchProducts = () => {
        console.log(searchTerm)
    }


    return(
        <AppContext.Provider value = {{searchTerm, setSearchTerm, SearchProducts}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider

