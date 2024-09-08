import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Product from '../../home/Products/Product';
import { useSelector } from 'react-redux';
import { paginationItems } from '../../../constants';
import { getProducts } from '../../../functions/product';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const Pagination = ({
  itemsPerPage,
  itemOffset,
  products,
  totalPages,
  totalProducts,
  handlePageClick,
  loading,
}) => {
  const viewMode = useSelector((state) => state.orebi.viewMode);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <div>
      {products && products.length > 0 ? (
        <>
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10 drop-shadow-xl'
                : 'flex flex-col gap-4'
            }
          >
            {products.map((product) => (
              <div key={product._id} className="w-full">
                <Product
                  _id={product._id}
                  img={product.Image}
                  productName={product.Title}
                  slug={product.slug}
                  price={product.Price}
                  color={product.color}
                  des={product.Description}
                  pdf={product.pdf}
                  ficheTech={product.ficheTech}
                  video={product.video}
                  loading={loading}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center mt-6">
            <ReactPaginate
              breakLabel="..."
              nextLabel=" > "
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              pageCount={totalPages}
              previousLabel=" < "
              renderOnZeroPageCount={null}
              containerClassName={` flex justify-center`}
              pageClassName="mx-1 h-7 w-7 text-sm px-1 py-1 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 flex items-center justify-center"
              activeClassName="bg-primeColor text-white"
              previousClassName=" text-sm px-1 py-1 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100"
              nextClassName=" text-sm px-1 py-1 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100"
              breakClassName=" text-sm h-7 w-7 px-1 py-1 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 flex items-center justify-center"
              disabledClassName="text-gray-400 cursor-not-allowed"
            />
            <p className="text-base font-normal text-lightText">
              Showing {itemOffset + 1} to{' '}
              {Math.min(itemOffset + itemsPerPage, totalProducts)} of{' '}
              {totalProducts} products
            </p>
          </div>
        </>
      ) : (
        <h2 className="flex text-xl pt-4 font-semibold text-gray-700">
          <ExclamationTriangleIcon className="h-6 w-6 mx-1 text-yellow-400" />
          {query
            ? `Aucun produit trouvé pour "${query}"`
            : 'Aucun produit trouvé'}{' '}
          avec les filtres appliqués{' '}
        </h2>
      )}
    </div>
  );
};

export default Pagination;
