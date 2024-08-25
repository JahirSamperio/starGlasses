
import React, { useEffect, useState } from 'react'

const AuthContext = React.createContext([{}, () => { }]);

const AuthConextProvider = (props) => {
    const [auth, setAuth] = useState({
        token: localStorage.getItem('token') || '',
        auth: !!localStorage.getItem('token')
    })

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuth({ token, auth: true });
        }
    }, [])

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
          {props.children}
        </AuthContext.Provider>
      );
}



export { AuthContext, AuthConextProvider }