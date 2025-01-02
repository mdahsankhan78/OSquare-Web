import React from 'react'

const Logo = () => {
  return (
    <>
        <a href="/">
            <span className='flex items-center'>
                <img src="/Logo.svg" alt="OSquare" className="h-8 ml-2" />
                {/* Adjust margin here */}
            </span>
        </a>
    </>
  )
}

export default Logo