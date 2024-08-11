import React, { useEffect } from 'react'
import locationIcon from 'assets/icons/locationIcon.svg';
import phoneIcon from 'assets/icons/phoneIcon.svg';
import clockIcon from 'assets/icons/clockIcon.svg';
import { fetchContactsData } from 'redux/features/contact/contactSlice';
import { useDispatch ,useSelector } from 'react-redux';


const ContactUs = () => {


    const dispatch = useDispatch();
    const contactsData=useSelector((state)=>state.contact?.contactsData)
    console.log(contactsData)
    useEffect(()=>
    {
        dispatch(fetchContactsData());
    },[])





    return (
        <div className='w-1/2 mt-24'>
            <h2 className='w-full text-center text-4xl font-semibold px-8  md:px-24 lg:px-48'>Get In Touch With Us</h2>
            <p className='w-full h-12  mt-2 text-center  text-gray6 lg:px-32'>
                For More Information About Our Product & Services.
                Please Feel Free To Drop Us An Email.
                Our Staff Always Be There To Help You Out.
                Do Not Hesitate!
          </p>
            <div className='flex flex-col-reverse lg:flex lg:flex-row lg:justify-around md:px-12 lg:px-48 '>
                <div className='px-12 w-96 pt-32'>
                    <div className='flex gap-5'>
                        <img src={locationIcon} alt='' className='-mt-20'/>
                        <div>
                            <h3 className='text-2xl font-medium'>Address</h3>
                            <p className='pr-12'>
                               {contactsData?.[0]?.address}
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-3 my-14'>
                        <img src={phoneIcon} alt='' className='-mt-14' />
                        <div>
                            <h3 className='text-2xl font-medium'>Phone</h3>
                            <p className='pr-16'>
                               {contactsData?.[0]?.mobile}
                                <br/>
                                {contactsData?.[0]?.hotline}
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <img src={clockIcon} alt='' className='-mt-24' />
                        <div className=''>
                            <h3 className='text-2xl font-medium'>Working Time</h3>
                            <p className='pr-12'>
                            {contactsData?.[0]?.weekdayWorkingTime}
                            </p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default ContactUs
