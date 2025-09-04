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

  useEffect(() => {
    const loggedInUser = localStorage.getItem('LoggedInUser');
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserData(userData.data);
    }
  },[]);

  const handleLogin = (email, password) => {
    // Check admin login
    if (email === 'admin@example.com' && password === '123') {
      const adminData = {
        id: 1,
        firstname: 'Admin',
        email: 'admin@example.com',
        role: 'admin'
      };
      setUser('admin');
      setloggedInUserData(adminData);
      localStorage.setItem('LoggedInUser', JSON.stringify({
        role: 'admin',
        data: adminData
      }));
      return;
    }
    
    // Check employee login
    if (authData && authData.employees) {
      const employee = authData.employees.find(e => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setloggedInUserData(employee);
        localStorage.setItem('LoggedInUser', JSON.stringify({
          role: 'employee',
          data: employee
        }));
        return;
      }
    }
    
    // If we get here, credentials are invalid
    alert("Invalid email or password. Please try again.");
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user === 'admin' ? <AdminDashboard/> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : null)}
      
    </>
  )
}

export default App