import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from './context/AuthProvider'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { setLocalStorage, getLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem('LoggedInUser');
  //     if(loggedInUser){
  //       setUser(loggedInUser.role);
  //     }
      
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser({role:'admin'});
      localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}));
    } else if (authData)  {
      const employee=authData.employees.find((e)=>e.email === email && e.password === password)
      if(employee){
        setUser('employee');
        setloggedInUserData(employee);
        localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee'}));
      }
      
    } else {
      alert("Invalid Credentials");
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user === 'admin' ? <AdminDashboard/> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : null)}
      
    </>
  )
}

export default App