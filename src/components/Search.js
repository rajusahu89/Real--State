import React, { useContext } from 'react';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

// import context
import { HouseContext } from './HouseContext';

// import icon
import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <div>
          
          <input type="date"  className='border border-light-gray-700 text-black-700 hover:border-purple-600 hover:text-purple-600 rounded-lg p-5 text-sm w-full transition' />
        </div>
      <button
        onClick={() => {
          handleClick();
        }}
        

        className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[100px] h-16 rounded-lg flex justify-center items-center text-white text-lg'
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
