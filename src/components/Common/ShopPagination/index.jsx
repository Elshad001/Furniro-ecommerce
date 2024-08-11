import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { Filter, FilterBar, ProductCard ,ProductListCard } from 'components';
import { fetchProductsData } from 'redux/features/shop/shopSlice';


const ShopPagination = () => {

    const [openFilter, setOpenFilter] = useState(false);
    const [perPage, setPerPage] = useState(16);
    const [listType, setListType] = useState('grid');


    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.shop?.productsData);
    const products = productsData?.[0]?.products
    console.log(productsData);
    console.log(products);

    useEffect(() => {
        dispatch(fetchProductsData());
    }, []);

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const pageCount = Math.ceil(products?.length / perPage);

    const displayedProducts = products?.slice(
        currentPage * perPage,
        (currentPage + 1) * perPage
    );




    return (
        <div>
            <FilterBar
                openFilter={openFilter}
                setOpenFilter={setOpenFilter}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                perPage={perPage}
                setPerPage={setPerPage} 
                listType={listType}
                setListType={setListType}
             />
            <div>
                <div className='flex flex-1 w-full h-auto gap-8 lg:px-24'>
                    <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} />
                    {
                        listType === 'grid' ?
                            <div className='lg:gap-16 w-full h-auto  flex flex-wrap justify-center gap-4  mt-8'>
                                {displayedProducts?.map((product) => (

                                    <ProductCard key={product.id} product={product} />

                                ))}

                            </div>
                            :
                            <div className='lg:gap-16 w-full h-auto  flex flex-wrap justify-center gap-4  mt-8'>
                                {displayedProducts?.map((product) => (

                                    <ProductListCard key={product.id} product={product} />

                                ))}

                            </div>
                    }

                </div>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={'flex items-center justify-center w-full h-[90px] my-8'}
                    pageLinkClassName={'mx-2 px-6 py-3 rounded bg-[#F9F1E7]  text-xl hover:bg-[#B88E2E] hover:text-white'}
                    activeLinkClassName={'bg-primary text-white'}
                    previousClassName={currentPage === 0 ? 'hidden' : 'mx-2 cursor-pointer px-6 py-3  bg-[#F9F1E7] font-Poppins text-[20px] font-[300] rounded hover:bg-[#B88E2E] hover:text-white'}
                    previousLinkClassName={''}
                    nextClassName={currentPage === pageCount - 1 ? 'hidden' : 'mx-2 cursor-pointer px-6 py-3  bg-[#F9F1E7] font-Poppins text-[20px] font-[300] rounded hover:bg-[#B88E2E] hover:text-white'}
                    nextLinkClassName={'hover:text-white'}
                />
            </div>

        </div>


    );
};

export default ShopPagination;