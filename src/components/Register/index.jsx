import React from 'react';
import { useFormik } from 'formik';
import { registerUser } from 'redux/features/auth/authSlice'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, isLoggedIn } = useSelector((state) => state.auth);
  
    const formik = useFormik({
      initialValues: {
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      onSubmit: (values) => {
        dispatch(registerUser(values));
        formik.resetForm();
      },
    });
  
    if (isLoggedIn) {
      navigate('/home'); 
      return null;
    }
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-12 w-1/2  px-48 py-12 border-2 rounded-md  bg-white mx-auto my-12'>
        <p>
          <label htmlFor="name" className='block text-base font-semibold'>Username</label>
          <input
            id="userName"
            name="userName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.userName}
            className='w-96 py-4 rounded-md mt-2 border-2'
          />
        </p>
        <p>
          <label htmlFor="lastName" className='block text-base font-semibold'>First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className='w-96 py-4 rounded-md mt-2 border-2 '
          />
        </p>
        <p>
          <label htmlFor="username" className='block text-base font-semibold'>Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className='w-96 py-4 rounded-md mt-2 border-2 '
          />
        </p>
        <p>
          <label htmlFor="email" className='block text-base font-semibold '>Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className='w-96 py-4 rounded-md mt-2 border-2'
          />
        </p>
        <p>
          <label htmlFor="password" className='block text-base font-semibold'>Password</label>
          <input
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
            className='w-96 py-4 rounded-md mt-2 border-2 '
          />
        </p>
        <button type="submit" className='w-48 px-2 py-3 text-lg border-2 border-primary hover:text-white hover:bg-primary font-medium  mx-auto rounded'>Sign up</button>
      </form>
    </div>

  );
};

export default Register;






