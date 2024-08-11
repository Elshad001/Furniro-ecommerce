import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchGridImages } from 'redux/features/products/productsSlice';
// import gridimg1 from 'assets/images/gridimg1.png';
// import gridimg2 from 'assets/images/gridImg2.png';
// import gridimg3 from 'assets/images/gridimg3.png';
// import gridimg4 from 'assets/images/gridimg4.png';
// import gridimg5 from 'assets/images/gridimg5.png';
// import gridimg6 from 'assets/images/gridimg6.png';
// import gridimg7 from 'assets/images/gridimg7.png';
// import gridimg8 from 'assets/images/gridimg8.png';
// import gridimg9 from 'assets/images/gridimg9.png';

const GridGallery = () => {


const dispatch= useDispatch();
const gridImages = useSelector((state)=>state.products?.gridImages)

console.log(gridImages);

useEffect(()=>
{
  dispatch(fetchGridImages());
},[]);



  return (
    <div className='w-full h-[800px]  p-5 overflow-hidden'>
      <div>
        <p className='w-full text-center font-semibold text-xl text-gray2'>
          Share your setup with
        </p>
        <h2 className='w-full text-center font-bold text-4xl text-gray1'>
          #FuniroFurniture
        </h2>
      </div>
      <div className='grid-gallery w-full my-12 py-2 lg:px-5 ml-5'>
        {
          gridImages.map((gridImage)=>
          (
            <img key={gridImage?.id} className={`grid${gridImage?.id}`} src={gridImage?.imageUrls} alt={`grid${gridImage?.id}`} />

          ))
        }
      </div>
    </div>
  )
}

export default GridGallery
