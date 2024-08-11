import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import { fetchContact } from 'redux/features/contact/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ContactForm = () => {


    const dispatch = useDispatch();
    const contactMessage = useSelector((state) => state.contact?.contactMessage)
    const userId=localStorage.getItem('userId');
    console.log(contactMessage);

useEffect(()=>
{
    console.log(contactMessage?.message)
    toast.success(contactMessage?.message)
},[contactMessage])


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },


        onSubmit: (values) => {

            const { name, email, subject, message } = values
            dispatch(fetchContact({userId:userId , name: name, email: email, subject: subject, message: message }));
            console.log(values);
            formik.resetForm();
           
        },
    });


    return (
        <div className='pt-28'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-9 justify-center items-center'>
                <p>
                    <label htmlFor="name" className='block text-base font-semibold'>Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className='block w-72 h-14 md:w-96 md:h-16 lg:w-[528px] lg:h-[75px] mt-5 rounded border border-gray6 pl-8'
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
                        className='block w-72 h-14 md:w-96 md:h-16 lg:w-[528px] lg:h-[75px] mt-5 rounded border border-gray6 pl-8'
                    />
                </p>
                <p>
                    <label htmlFor="subject" className='block text-base font-semibold'>Subject</label>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.subject}
                        className='block w-72 h-14 md:w-96 md:h-16 lg:w-[528px] lg:h-[75px] mt-5 rounded border border-gray6 pl-8'
                    />
                </p>
                <p>
                    <label htmlFor="message" className='block text-base font-semibold'>Message</label>
                    <input
                        id="message"
                        name="message"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        className='block w-72 h-14 md:w-96 md:h-16 lg:w-[528px] lg:h-[75px] mt-5 rounded border border-gray6 pl-8'
                    />
                </p>
                <button type="submit" className='w-48 px-2 py-3 text-lg border-2 border-primary hover:text-white hover:bg-primary font-medium  mx-auto rounded'>Sign up</button>
            </form>
        </div>
    )
}

export default ContactForm
