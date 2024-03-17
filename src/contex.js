import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext()

const initialState= {
    goods: null,
    loading: false,
    toggle: true,
    basket: [],
    amount: 0,
    notification: false,
    
}

export const ContextProvider = ({ children }) =>{
    const [value, dispatch] = useReducer(reducer, initialState)
    

    return <ShopContext.Provider value={{value, dispatch}}>
        {children}
    </ShopContext.Provider>
}