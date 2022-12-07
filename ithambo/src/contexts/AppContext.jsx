//Context for the Grahical User Interface
//Contains state values for displaying the responsive menu etc...

import React, {createContext, useState} from "react"

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [filterCategory, setFilterCategory] = useState("")
    const [sortBy, setSortBy] = useState("")

    const SearchProducts = () => {
        console.log(searchTerm)
    }


    return(
        <AppContext.Provider value = {{searchTerm, setSearchTerm, SearchProducts, filterCategory, setFilterCategory, sortBy, setSortBy}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider

