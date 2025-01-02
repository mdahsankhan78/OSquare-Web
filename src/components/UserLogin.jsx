import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline';

const UserLogin = () => {
  return (
    <>
        <a href="/">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
                <UserCircleIcon className="h-8 w-8" />
                {/* <span className="ml-2 hidden sm:block text-sm">Sign In</span> */}
            </button>
        </a>
    </>
  )
}

export default UserLogin