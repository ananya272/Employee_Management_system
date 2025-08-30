import React, { useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { setLocalStorage, getLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
    } else if (email === 'user@me.com' && password === '123') {
      setUser('employee');
    } else {
      alert("Invalid Credentials");
    }
  };
  // useEffect(() => {
  //   // Set initial data in localStorage
  //   setLocalStorage();
    
  //   // Get and log the data from localStorage
  //   const employees = getLocalStorage();
  //   console.log('Employees data:', employees);
  // }, []);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
      
    </>
  )
}

export default App