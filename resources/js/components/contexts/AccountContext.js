import {createContext, useState} from "react";

export const AccountContext = createContext(null)
export const AccountProvider = (props) => {
    const [account, setAccount] = useState([]);
    return (
        <AccountContext.Provider value={[account, setAccount]}>
            {props.children}
        </AccountContext.Provider>
    )
}
