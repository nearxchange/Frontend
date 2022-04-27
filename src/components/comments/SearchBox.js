import React from 'react'

const SearchBox = (props) => {
	return (
		<div className="flex justify-center">
			<div className="my-5 xl:w-1/2">
				<div className="relative flex flex-row items-stretch w-full mb-4 input-group">
					<input type="search" className="form-control relative flex-auto min-w-0 block w-full h-11 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter Your Favorite Wallet Name" aria-label="Search" aria-describedby="button-addon3" />
					<button className="inline-block px-6 py-3 text-xs font-medium leading-tight text-blue-600 uppercase transition duration-150 ease-in-out border-2 border-blue-600 btn hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" type="button" id="button-addon3">Search</button>
				</div>
			</div>
		</div>
	);
}

export default SearchBox;