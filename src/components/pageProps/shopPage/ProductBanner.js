import React, { useEffect, useState } from 'react';
import { BsGridFill } from 'react-icons/bs';
import { ImList } from 'react-icons/im';
import { GoTriangleDown } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { DocumentPlusIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { toggleViewMode } from '../../../redux/orebiSlice';
import ShopSideNav from './ShopSideNav';
import SideNavModal from './shopBy/SideNavModal';

const getActiveFiltersCount = (filters) => {
  let count = 0;
  for (const filterType in filters) {
    if (filters.hasOwnProperty(filterType)) {
      count += filters[filterType].length;
    }
  }
  return count;
};

const ProductBanner = ({ itemsPerPageFromBanner, sortFromBanner }) => {
  const viewMode = useSelector((state) => state.orebi.viewMode);
  const user = useSelector((state) => state.orebi.userInfo);
  let [isOpen, setIsOpen] = useState(false);
  const filters = useSelector((state) => state.orebi.filters);

  const activeFiltersCount = getActiveFiltersCount(filters);

  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      {/* =========================================================
                            Left Part Start here
        ======================================================== */}

      <div className="hidden md:flex items-center gap-4">
        <span
          className={`${
            viewMode === 'grid'
              ? 'bg-primeColor text-white'
              : 'border-[1px] border-gray-300 bg-white'
          } w-8 h-8 text-lg flex items-center justify-center cursor-pointer drop-shadow-xl`}
          onClick={() => dispatch(toggleViewMode())}
        >
          <BsGridFill />
        </span>
        <span
          className={`${
            viewMode === 'list'
              ? 'bg-primeColor text-white'
              : 'border-[1px] border-gray-300 bg-white '
          } w-8 h-8 text-base flex items-center justify-center cursor-pointer drop-shadow-xl`}
          onClick={() => dispatch(toggleViewMode())}
        >
          <ImList />
        </span>
      </div>
      {/* =========================================================
                            Left Part End here
        ======================================================== */}
      {/* =========================================================
                            Right Part STart here
        ======================================================== */}
      <div className="flex items-center gap-2 md:gap-6  md:mt-0">
        {user && (
          <Link to={'/admin/product/create'}>
            <button className="flex items-center mt-4 md:mt-0 px-2 py-1 bg-green-500 text-xs md:text-base text-white rounded cursor-pointer drop-shadow-xl hover:bg-green-300 transition duration-300">
              <DocumentPlusIcon
                className="block h-4 w-4 md:h-6 md:w-6 mr-1"
                aria-hidden="true"
              />
              <span className="font-bold">
                {' '}
                <span className="hidden md:inline">Create </span>
                product
              </span>
            </button>
          </Link>
        )}
        <div className="block md:hidden ">
          <label className="block text-xs text-[#767676]">Filtres:</label>
          <span
            className={`${
              activeFiltersCount > 0
                ? 'bg-black text-white border-[1px] border-gray-200 p-1 flex items-center justify-center cursor-pointer drop-shadow-xl'
                : 'bg-white text-black border-[1px] border-gray-200 p-1 flex items-center justify-center cursor-pointer drop-shadow-xl'
            }`}
          >
            <FunnelIcon
              className="block  w-4 h-4"
              onClick={() => setIsOpen(true)}
            />{' '}
            <SideNavModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              // handleSubmit={handleSubmit}
              title="Filtres"
              message={
                <div className="h-[300px]  overflow-y-auto">
                  <ShopSideNav />
                </div>
              }
            />{' '}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs md:text-base text-[#767676] relative">
          <div className="block md:flex">
            <label className="block">Trier par:</label>
            <select
              onChange={(e) => sortFromBanner(e.target.value)}
              id="countries"
              className="w-36 md:w-52 drop-shadow-xl border-[1px] border-gray-200 py-1 px-2 cursor-pointer text-primeColor text-xs md:text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
            >
              <option value="Dernières Nouveautés">Dernières Nouveautés</option>
              <option value="Meilleures ventes">Meilleures ventes</option>
            </select>
          </div>

          <span className="absolute text-sm right-0 md:right-4 top-5 md:top-2.5">
            <GoTriangleDown />
          </span>
        </div>
        <div className="block md:flex items-center gap-2 text-xs md:text-base text-[#767676] relative">
          <label className="block">Affichage:</label>
          <select
            onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
            id="countries"
            className="w-12 drop-shadow-xl md:w-20 border-[1px] border-gray-200 py-1 px-2 cursor-pointer text-primeColor text-xs md:text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
          <span className="absolute text-sm right-4 top-5 md:top-2.5">
            <GoTriangleDown />
          </span>
        </div>
      </div>
      {/* =========================================================
                            Right Part End here
        ======================================================== */}
    </div>
  );
};

export default ProductBanner;
