import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {

    const navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token !== null) {
            setIsAuthenticated(true);
        }else{
            navigate("/")

        }
    }, [])
    return isAuthenticated ? <div>{children}</div> : null;
}

export default PrivateRoute