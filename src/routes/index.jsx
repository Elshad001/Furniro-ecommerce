import { lazy} from 'react';
import Url from "routes/url"

const HomePage = lazy(() =>  import('pages/HomePage'));
const ShopPage = lazy(() => import('pages/ShopPage'));
const ContactPage = lazy(() => import('pages/ContactPage'));
const CartPage = lazy(() => import('pages/CartPage'));
const SingleProductPage = lazy(() => import('pages/SingleProductPage'));
const SingleBlogPage = lazy(() => import('pages/SingleBlogPage'));
const BlogPage = lazy(() => import('pages/BlogPage'));
const CheckoutPage = lazy(() => import('pages/CheckoutPage'));
const WishlistPage = lazy(() => import('pages/WishlistPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));


const routes = [
    {
      path:Url.HOME_URL,
      component:<HomePage/>,
      
    },
    {
      path:Url.SHOP_URL,
      component:<ShopPage/>,
      
    },
    {
      path:Url.BLOG_URL,
      component: <BlogPage/>,
     
    },
    {
        path:Url.CONTACT_URL,
        component:< ContactPage/>,
        
      },
      {
        path:Url.CART_URL,
        component: <CartPage/>,
        
      },
      {
        path:Url.CHECKOUT_URL,
        component:<CheckoutPage/>,
       
      },
      {
        path:Url.SINGLEPRODUCT_URL,
        component:<SingleProductPage/>,
       
      },
      {
        path:Url.SINGLEBLOG_URL,
        component:<SingleBlogPage/>,
       
      },
      {
        path:Url.WISHLIST_URL,
        component:<WishlistPage/>,
       
      },
      {
        path:Url.LOGIN_URL,
        component:<LoginPage/>,
       
      },
      {
        path:Url.REGISTER_URL,
        component:<RegisterPage/>,
       
      },
      {
        path:Url.PROFILE_URL,
        component:<ProfilePage/>,
       
      },
  ];
  
  export default routes;