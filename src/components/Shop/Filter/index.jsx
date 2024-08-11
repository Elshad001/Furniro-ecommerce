import React, { useEffect, useState } from 'react'
import { fetchCategories } from 'redux/features/shop/shopSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { fetchSizes } from 'redux/features/shop/shopSlice';
import { fetchColors } from 'redux/features/shop/shopSlice';
import { fetchTags } from 'redux/features/shop/shopSlice';

const Filter = ({ openFilter, setOpenFilter }) => {

 
  const [openCategory, setOpenCategory] = useState(false)
  const [openSizes, setOpenSizes] = useState(false)
  const [openColors, setOpenColors] = useState(false)
  const [openTags, setOpenTags] = useState(false)

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.shop?.categories)
  const sizes = useSelector((state) => state.shop?.sizes);
  const colors = useSelector((state) => state.shop?.colors);
  const tags = useSelector((state) => state.shop?.tags);

  useEffect(() => {
    dispatch(fetchSizes());
  }, []);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  useEffect(() => {
    dispatch(fetchColors());
  }, [])

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleToggleCategory = () => {
    setOpenCategory(!openCategory);
  }

  const handleToggleSizes = () => {
    setOpenSizes(!openSizes);
  }

  const handleToggleColors = () => {
    setOpenColors(!openColors);
  }
 
  const handleToggleTags = () => {
    setOpenTags(!openTags);
  }

  return (
    <div className={openFilter ? ' flex-shrink-0  w-72   px-8 py-5 bg- bg-[#F9F1E7] border-2 rounded mt-8' : 'hidden'}>
      <div>
        <div className='flex justify-between items-center h-12 px-2 border-2 border-zinc-500 rounded-md'>
          <p className='font-medium'>Categories</p>
          {
            openCategory ?
              <CiSquareMinus size={25} onClick={handleToggleCategory} className='cursor-pointer font-medium' />

              :
              <CiSquarePlus size={25} onClick={handleToggleCategory} className='cursor-pointer font-medium' />
          }

        </div>
        {
          categories?.map((category) =>
          (
            <div key={category?.id} className={openCategory ? 'flex my-2 gap-2' : 'hidden'}>
              <input type='checkbox' />
              <p className='text-sm'>{category?.categoryName}</p>
            </div>
          ))
        }
      </div>
      <div className='my-8'>
        <div className='flex justify-between items-center h-12 px-2 border-2 border-zinc-500 rounded-md'>
          <p className='font-medium'>Sizes</p>
          {
            openSizes ?
              <CiSquareMinus size={25} onClick={handleToggleSizes} className='cursor-pointer font-medium' />

              :
              <CiSquarePlus size={25} onClick={handleToggleSizes} className='cursor-pointer font-medium' />
          }
        </div>
        {
          sizes?.map((size) =>
          (
            <div key={size?.id} className={openSizes ? 'flex my-2 gap-2' : 'hidden'}>
              <input type='checkbox' />
              <p className='text-sm'>{size?.sizeName}</p>
            </div>
          ))
        }
      </div>
      <div className='my-8'>
        <div className='flex justify-between items-center h-12 px-2 border-2 border-zinc-500 rounded-md'>
          <p className='font-medium'>Colors</p>
          {
            openColors ?
              <CiSquareMinus size={25} onClick={handleToggleColors} className='cursor-pointer font-medium' />

              :
              <CiSquarePlus size={25} onClick={handleToggleColors} className='cursor-pointer font-medium' />
          }
        </div>
        {
          colors?.map((color) =>
          (
            <div key={color?.id} className={openColors ? 'flex my-2 gap-2' : 'hidden'}>
              <input type='checkbox' />
              <button
                className={`w-4 h-4 rounded-full`}
                style={{ backgroundColor: `${color?.colorHexCode}` }}
              ></button>
            </div>
          ))
        }
      </div>
      <div className='my-8'>
        <div className='flex justify-between items-center h-12 px-2 border-2 border-zinc-500 rounded-md'>
          <p className='font-medium'>Tags</p>
          {
            openTags ?
              <CiSquareMinus size={25} onClick={handleToggleTags} className='cursor-pointer font-medium' />

              :
              <CiSquarePlus size={25} onClick={handleToggleTags} className='cursor-pointer font-medium' />
          }
        </div>
        {
          tags?.map((tag) =>
          (
            <div key={tag?.id} className={openTags ? 'flex my-2 gap-2' : 'hidden'}>
              <input type='checkbox' />
              <p className='text-sm'>{tag?.tagName}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Filter
