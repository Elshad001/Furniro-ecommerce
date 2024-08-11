import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "redux/features/products/productsSlice";
import blogsReducer from "redux/features/blogs/blogsSlice";
import cartReducer from "redux/features/cart/cartSlice";
import wishlistReducer from "redux/features/wishlist/wishlistSlice";
import authReducer from "redux/features/auth/authSlice";
import userReducer from "redux/features/user/userSlice";
import contactReducer from "redux/features/contact/contactSlice";
import shopReducer from "redux/features/shop/shopSlice";




export default configureStore({
	reducer: {
		products: productsReducer,
    blogs: blogsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    user: userReducer,
    contact: contactReducer, 
    shop: shopReducer,
	},
})











// import { combineReducers } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['isLoggedIn', 'jwtToken','refreshToken','userId','cartData','wishlistItems','user']
// };

// const rootReducer = combineReducers({
//   products: persistReducer(persistConfig, productsReducer),
//   blogs: persistReducer(persistConfig, blogsReducer),
//   cart: persistReducer(persistConfig, cartReducer),
//   // wishlist: persistReducer(persistConfig, wishlistReducer),
//   auth: persistReducer(persistConfig, authReducer),
//   user: persistReducer(persistConfig, userReducer),
//   // designation: persistReducer(persistConfig, designationReducer),
//   // contact: persistReducer(persistConfig, contactReducer),
//   // shop: persistReducer(persistConfig, shopReducer),
// });


// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// export const persistor = persistStore(store);
