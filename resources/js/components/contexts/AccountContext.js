import {createContext, useContext, useState, Component} from "react";
import {Redirect, Route} from "react-router";

export const AccountContext = createContext(null)
export const AccountProvider = (props) => {
    const [account, setAccount] = useState([]);
    return (
        <AccountContext.Provider value={[account, setAccount]}>
            {props.children}
        </AccountContext.Provider>
    )
}

export const PrivateRoute = ({component: Component, ...rest}) => {
    let [account, setAccount] = useContext(AccountContext);
    return (
        <Route {...rest} render={(props) => (
            account.length !== 0
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}/>
        )}
        />
    );
}
