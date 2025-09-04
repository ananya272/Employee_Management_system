import React, { useState, useEffect } from 'react';

const Header = ({ data }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (!data || !data.firstname) {
      setUsername('Admin');
    } else {
      setUsername(data.firstname);
    }
  }, [data]);

  const handleLogout = () => {
    localStorage.removeItem('LoggedInUser');
    window.location.reload();
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button 
        onClick={handleLogout}
        className='bg-red-600 hover:bg-red-700 text-lg font-medium text-white px-5 py-2 rounded-sm transition-colors'
      >
        Log out
      </button>
    </div>
  )
}

export default Header