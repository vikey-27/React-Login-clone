import React, { useState } from "react";
export const AuthContext=React.createContext();

export const ContextProvider=(props)=>{
    const[token,setToken]=useState('');
    const [message,setMessage]=useState('');
    const tokenChangeHandler=(token)=>{
        setToken(token)
    }
    const messageHandler=(message)=>{
        setMessage(message)
    }
    

    return <AuthContext.Provider value={{token,tokenChangeHandler,messageHandler,message}}>
        {props.children}


    </AuthContext.Provider>
}