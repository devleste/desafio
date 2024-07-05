import { useSystem } from '@context/useSystem';
import { isObjectEmpty } from '@utils/isObjectEmpty';
import React, { useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';

const SearchBar = () => {
  const {
    searchContext,
    setSearchContext,
    setSearchSkeletonOverlayActive,
    isFilterActive,
    setIsFilterActive,
  }: any = useSystem();

  var typingTimer: any;
  let handleSearch = (slug: string) => {
    clearTimeout(typingTimer);
    setSearchSkeletonOverlayActive(true);

    typingTimer = setTimeout(() => {
      setSearchContext({ ...searchContext, slug: slug });
    }, 2000);
  };

  return (
    <div className="flex items-center max-w-[200px] md:max-w-md bg-[#e8ebea] rounded-lg">
      <div className="w-full">
        <input
          type="search"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          className="w-full px-2 py-0.5 md:px-4 md:py-1 text-gray-800 rounded-full focus:outline-none bg-transparent"
          placeholder="Search..."
        />
      </div>
      <div>
        <button
          onClick={() => {
            setIsFilterActive(!isFilterActive);
          }}
          className="flex relative items-center bg-[#009373] justify-center w-9 h-9 md:w-12 md:h-12 text-[#e8ebea] text-md rounded-r-md md:rounded-r-lg md:text-lg"
        >
          <FaFilter />
          {!isObjectEmpty(searchContext) && (
            <div className="bg-red-500 absolute -top-1 -right-1 z-10 rounded-full w-3 h-3"></div>
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
