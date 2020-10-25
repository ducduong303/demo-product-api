import React, { createContext, useState, useEffect } from 'react';
import CallApi from '../utils/CallApi';
export const ContextProvider = createContext();
function Context(props) {
    const [data,setData] = useState([])

      useEffect(() => {
        CallApi("products", "GET", null)
            .then(res => setData(res.data))
    }, [])
    return (
        <ContextProvider.Provider value={{
            data:data
        }}>
            {props.children}
        </ContextProvider.Provider>
    );
}

export default Context;