import React, { useState ,useEffect} from 'react';
import { useFormik } from 'formik'
import { Link} from 'react-router-dom';
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { loginUser, setUserData } from 'redux/features/auth/authSlice';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userId,access_token,refresh_token, isLoggedIn } = useSelector((state) => state.auth);


    useEffect(() =>
    {
        if(isLoggedIn) 
        {
           toast.success('you have logged in successfully');
           navigate('/');
        }

    },[isLoggedIn])


    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },

        onSubmit:(values) => {
            console.log(values);
          dispatch(loginUser(values));
          formik.resetForm();
          console.log(isLoggedIn,access_token,refresh_token);
        },
    });

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

   
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-12 w-1/2  px-48 py-12 border-2 rounded-md  bg-white mx-auto my-12'>
                <p>
                    <label htmlFor="username" className='block text-base font-semibold'>UserName</label>
                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        className='w-96 py-4 pl-2 rounded-md mt-2 border-2 '
                    />
                </p>
                <p className='relative'>
                    <label htmlFor="password" className='block text-base font-semibold'>Password</label>
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className='w-96 py-4 pl-2 rounded-md mt-2 border-2 '
                    />
                    <span className='absolute top-[50px] right-5' onClick={handlePasswordToggle}>
                        {showPassword ? <RiEyeLine size={20} /> : <RiEyeCloseLine size={20} />}
                    </span>
                </p>
                <button type="submit" className='w-48 px-2 py-3 text-lg border-2 border-primary hover:text-white hover:bg-primary font-medium  mx-auto rounded'>Sign in</button>
            </form>
            <div className='flex items-center justify-center'>
                <div className='w-96 h-24 text-center'>
                    <p className='text-center'>New to Furniro ?</p>
                    <Link to='/register'>
                        <button className='p-3 border-2 mt-2 text-sm bg-slate-100 hover:bg-slate-200'>Create your Furniro Account</button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Login
