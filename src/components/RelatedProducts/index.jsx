import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedProducts } from 'redux/features/products/productsSlice'
import { useEffect } from 'react'
import { ProductCard } from 'components'

const RelatedProducts = () => {

  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.products?.singleProduct);
  const relatedProducts = useSelector((state) => state.products?.relatedProducts);
  console.log(singleProduct?.id);

  useEffect(() => {
    dispatch(fetchRelatedProducts(singleProduct?.id))
  }, [])

  console.log(relatedProducts)



  return (
    <div className='w-full mt-12'>
      <h3 className='w-full text-center text-2xl font-bold'>Related Products</h3>
      <div className='flex gap-12 justify-center items-center mt-8'>
        {
          relatedProducts?.map((relatedProduct,index) =>
          (
            <ProductCard key={index} product={relatedProduct} />
          ))
        }
      </div>
    </div>
  )
}

export default RelatedProducts
