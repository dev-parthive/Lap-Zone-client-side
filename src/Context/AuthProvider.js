import React, { createContext } from 'react';


export const AuthContext = createContext()



const AuthProvider = ({children}) => {
    

    // authInfo 
    const authInfo = {
        
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;