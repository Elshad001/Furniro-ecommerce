import React from 'react'
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setLoggedOut } from 'redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
const Profile = () => {


  const navigate = useNavigate();

  
 const userData=useSelector((state)=>state.user.user);
 const dispatch = useDispatch();

const handleLogOut =() => 
{
    dispatch(setLoggedOut());
   
       alert.error('you have logged out');
       navigate('/login');
  

}

  return (
    <div className=' px-96 my-12'>
         <div className="bg-white overflow-hidden shadow rounded-lg border">
    <div className="px-4 py-5 sm:px-6  bg-[#fbf7f0]">
        <h3 className="text-lg leading-6 font-semibold text-gray-900 text-center">
            User Profile
        </h3>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <div className="sm:divide-y sm:divide-gray-200 ">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6  justify-items-center">
                <p className="text-sm font-medium text-gray-500 text-start justify-items-start">
                  Name
                </p>
                <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   {userData?.firstName}
                </p>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-items-center">
                <p className="text-sm font-medium text-gray-500 justify-items-start">
                  Surname
                </p>
                <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   {userData?.lastName}
                </p>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-items-center">
                <p className="text-sm font-medium text-gray-500">
                  Username
                </p>
                <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   {userData?.userName}
                </p>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-items-center">
                <p className="text-sm font-medium text-gray-500">
                    Email address
                </p>
                <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userData?.email}
                </p>
            </div>
        </div>
    </div>
</div>
       <button onClick={handleLogOut}>Log Out</button>
    </div>
   
  )
}

export default Profile








