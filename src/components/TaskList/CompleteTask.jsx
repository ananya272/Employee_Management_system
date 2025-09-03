import React from 'react'

const CompleteTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Lets learn React</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <div className='mt-4'>
            <button className='w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg cursor-default'>
                ✓ Completed
            </button>
        </div>
        
      </div>
    )
}

export default CompleteTask
