import React, {createContext} from 'react';;

export const DataContext = createContext()

function contextData({children}) {
    return (
        <DataContext.Provider value={9}>
            {children}
        </DataContext.Provider>
    );
}

export default contextData;