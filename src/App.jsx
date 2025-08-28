import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { setLocalStorage, getLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email,password)=>{
    if(email == 'admin@example.com' && password=='123'){
      console.log("This is Admin")
    }else{
      alert("Invalid Credengtials")
    }

  }
  handleLogin()
  // useEffect(() => {
  //   // Set initial data in localStorage
  //   setLocalStorage();
    
  //   // Get and log the data from localStorage
  //   const employees = getLocalStorage();
  //   console.log('Employees data:', employees);
  // }, []);

  return (
    <>
      {!user ? <Login />: ''}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App