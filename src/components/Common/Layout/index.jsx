import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header} from 'components';
import { Footer } from 'components';
import CartSidebar from 'components/CartSidebar';
import { CardModal } from 'components';
import { WishlistModal } from 'components';

const Layout = () => {

  const isCartSidebarOpen = useSelector((state) => state.cart.isCartSidebarOpen);
  const isCardModalOpen = useSelector((state) => state.products.isCardModalOpen);
  const isCardWishlistOpen = useSelector((state) => state.wishlist.isCardWishlistOpen);
  
  

  return (
    <div>
      <Header/>
      {isCardModalOpen && <CardModal />}
      {isCardModalOpen ? <div className='overlay hidden  md:hidden lg:block'></div> : ''}
      {isCardWishlistOpen && <WishlistModal />}
      {isCardWishlistOpen ? <div className='overlay hidden  md:hidden lg:block'></div> : ''}
      {isCartSidebarOpen && <CartSidebar />}
      {isCartSidebarOpen ? <div className='overlay hidden  md:hidden lg:block'></div> : ''}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
