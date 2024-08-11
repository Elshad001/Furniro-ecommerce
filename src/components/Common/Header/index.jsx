import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react';
import { openCartSidebar } from 'redux/features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import logo from 'assets/images/logo.svg'
import userIcon from 'assets/icons/userIcon.svg'
import searchIcon from 'assets/icons/searchIcon.svg'
import heartIcon from 'assets/icons/heartIcon.svg'
import cartIcon from 'assets/icons/cartIcon.svg'
import { FaBars } from "react-icons/fa6";
import { MenuSidebar } from 'components';
import { fetchUserData } from 'redux/features/user/userSlice';
import { fetchCartItems} from 'redux/features/cart/cartSlice';
import { fetchWishlistItems } from 'redux/features/wishlist/wishlistSlice';

const Header = () => {


  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user?.user);
  
  
  
  const wishlistItems = useSelector((state) => state.wishlist?.wishlistItems);
  const wishlist =wishlistItems?.[0]?.favorites
  const cartData=useSelector((state)=>state.cart?.cartData)
  const userId=localStorage.getItem('userId');
  const isLoggedIn=localStorage.getItem('isLoggedIn');


console.log(wishlist);
  


  useEffect(() => {
    dispatch(fetchUserData(userId))
    dispatch(fetchCartItems(userId))
    dispatch(fetchWishlistItems(userId)); //
  }, [isLoggedIn]);





  const handleOpenSidebar = () => {
    dispatch(openCartSidebar());
  }

  const handleOpenMobileMenu = () => {
    setIsOpenMenu(true);
  }



 

  return (
    <div className='fixed z-50 bg-white flex justify-between items-center  flex-shrink-0 w-full h-[100px] px-5 md:px-8 lg:pl-14  lg:pr-24'>
      <div className='flex gap-1 items-center w-1/2 lg:w-1/3 '>
        <FaBars size={30} className='lg:hidden' onClick={handleOpenMobileMenu} />
        <div className='flex items-center'>
          <img src={logo} alt='logo' className='w-8 h-6  lg:w-[50px] lg:h-8' />
          <p className=' font-Montserrat text-xl lg:text-3xl pt-1 sm:block md:block lg:block hidden'>Furniro</p>
        </div>
      </div>
      <nav className='hidden w-1/3 lg:block'>
        <ul className='flex justify-between'>
          <NavLink to='/' activeclassname="active">Home</NavLink>
          <NavLink to='shop' activeclassname="active">Shop</NavLink>
          <NavLink to='blogs' activeclassname="active">Blog</NavLink>
          <NavLink to='contact' activeclassname="active">Contact</NavLink>
        </ul>
      </nav>
      {isOpenMenu && <MenuSidebar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />}
      <div className='flex justify-end items-center gap-[8%] w-1/2 h-8 lg:w-1/3 '>
        {
          isLoggedIn ?
            <Link to='/profile'>
              <p>{userData?.userName}</p>
            </Link>
            :
            <Link to='/login'>
              <div>
                <img src={userIcon} alt='' />
              </div>
            </Link>
        }
        <img src={searchIcon} alt='' />
        <Link to='/wishlist'>
          <div className='relative'>
            <img src={heartIcon} alt='' className='' />
            <div className={wishlist?.length > 0 ? 'absolute  -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-white text-xs' : 'hidden'}>
              <span className='px-1.5 py-2.5'>{wishlist?.length}</span>
            </div>
          </div>
        </Link>
        <div className='relative' onClick={handleOpenSidebar}>
          <img src={cartIcon} alt='' className='aspect-w-1 aspect-h-1' />
          <div className={cartData?.length > 0 ? 'absolute  -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-white text-xs' : 'hidden'}>
            <span className='px-1.5 py-2.5'>{cartData?.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header