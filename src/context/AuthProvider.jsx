import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState({ employees: [], admin: null })

    useEffect(() => {
        // Clear only if no data exists
        if (!localStorage.getItem('employees')) {
            setLocalStorage();
        }
        
        // Get data from localStorage
        const { employees, admin } = getLocalStorage()
        console.log('Loaded employees:', employees); // Debug log
        setUserData({ 
            employees: employees || [],
            admin: admin?.[0] || null
        });
    }, [])

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>

        </div>
    )
}

export default AuthProvider
