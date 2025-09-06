import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data);
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='mt-4'>
            <div className='flex gap-2'>
                <button className='flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap'>
                    ✓ Complete
                </button>
                <button className='flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap'>
                    ✗ Fail
                </button>
            </div>
        </div>
      </div>
    )
}

export default AcceptTask
