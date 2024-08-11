import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import { RotatingLines } from "react-loader-spinner";
import { Layout, ScrollToTop } from "components";
import routes from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
      <Suspense fallback=
        {<div className='flex w-full h-screen items-center justify-center'>
          <RotatingLines strokeWidth="5" width='96' radius='9' strokeColor="orange" animationDuration="0.75" visible={true}
          /></div>}>
        <ScrollToTop />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Layout />}>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
              ))}
            </Route>
          </Routes>
        </AnimatePresence>
        <ToastContainer position='bottom-right' />
      </Suspense>
    </>
  );
}

export default App;
