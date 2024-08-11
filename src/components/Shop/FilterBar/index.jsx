import React from 'react'
import filterIcon from 'assets/icons/filterIcon.svg';
import gridIcon from 'assets/icons/gridIcon.svg';
import viewlistIcon from 'assets/icons/viewlistIcon.svg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from 'redux/features/shop/shopSlice';



const FilterBar = ({ openFilter, setOpenFilter, currentPage, setCurrentPage, perPage, setPerPage, listType, setListType }) => {


    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.shop?.productsData);
    const products = useSelector((state) => state.shop?.productsData?.productResponseList);
    const [inputValue, setInputValue] = useState(perPage.toString());

    // useEffect(() => {
    //     dispatch(fetchProductsData({ designationId: 3, pageNumber: currentPage, pageSize: perPage }));
    // }, []);


    useEffect(() => {
        if (inputValue !== '') {
            const newPerPage = parseInt(inputValue, 10);
            setPerPage(newPerPage);
        }
    }, [inputValue]);



    const handleToggleFilter = () => {

        setOpenFilter(!openFilter);
    }


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setCurrentPage(1);
    };

    const handleClickGrid =()=>
    {
        setListType('grid');
    }

    const handleClickList =()=>
    {
        setListType('list');
    }



    console.log(openFilter);
    return (
        <div className='flex-col justify-center lg:flex lg:flex-row lg:items-center w-full  bg-[#F9F1E7] px-24 py-5'>
            <div className='flex gap-6 md:w-1/3 lg:w-1/5 h-6 '>
                <span className='flex gap-2'>
                    <div onClick={handleToggleFilter}>
                        <img src={filterIcon} alt='' />
                    </div>
                    <p>Filter</p>
                </span>
                <div onClick={handleClickGrid}>
                    <img src={gridIcon} alt='' />
                </div>
                <div onClick={handleClickList}>
                    <img src={viewlistIcon} alt='' />
                </div>
            </div>
            <div className='flex-col lg:flex lg:flex-row lg:items-center lg:justify-between md:w-2/3 lg:w-4/5'>
                {/* <p className='my-12 md:my-12 lg:my-0 lg:pl-14 text-sm lg:text-lg'>{`Showing ${currentPage + 1}–${(currentPage + 1) * perPage} of ${productsData?.TotalElements} results`}</p> */}
                <div className='flex-col lg:flex lg:flex-row lg:items-center lg:justify-between gap-7'>
                    <div className='flex gap-4 items-center'>
                        <p className='text-sm lg:text-lg pr-2'>Show</p>
                        {/* <input
                            type='text'
                            value={inputValue}
                            onChange={handleInputChange}
                            className='w-8 h-8 lg:w-12 lg:h-12 text-center text-gray6'
                        /> */}
                    </div>
                    <div className='flex gap-4 items-center mt-5 lg:mt-0'>
                        <p className='text-sm lg:text-lg'>Sort By</p>
                        <input className='w-32 h-8  lg:w-36 lg:h-12 text-center text-gray6' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBar
