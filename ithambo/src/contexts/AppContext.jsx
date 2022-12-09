//Context for the Grahical User Interface
//Contains state values for displaying the responsive menu etc...

import React, {createContext, useState} from "react"

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [filterCategory, setFilterCategory] = useState("")
    const [sortBy, setSortBy] = useState("")

    //Login and sign up states
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    const SearchProducts = () => {
        console.log(searchTerm)
    }

    //Hide and show form
    const [displayForm, setDisplayForm] = useState("none")

    const showForm = () => {
        setDisplayForm("block")
        console.log(displayForm)
    }

    const hideForm = () => {
        setDisplayForm("none")
        console.log(displayForm)
    }


    return(
        <AppContext.Provider value = {{showForm, hideForm, searchTerm, setSearchTerm, SearchProducts, filterCategory, setFilterCategory, sortBy, setSortBy, emailInput, setEmailInput, passwordInput, setPasswordInput, displayForm}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider

