import { createContext, useContext, useState, useEffect } from 'react';

const IsLoggedIn = createContext();

const IsLoggedInContext = ({children}) => {
    const [Login, setLogin] = useState(false)
    const [Logout, setLogout] = useState(true)

    useEffect(()=> {
        if (Logout === true) {
            alert("Please SignIn to use that function")
        }
        else if (Logout === false) {
            alert("You can now do this function")
        }
    })

    return (
        <IsLoggedIn.Provider>{children}</IsLoggedIn.Provider>
    )
}

export default IsLoggedInContext;

export const IsLoggedInState = () => {
    return useContext(IsLoggedIn)
}