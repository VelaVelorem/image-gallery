const SearchBar = () => {
    return (
        <div className="px-3 my-10">
            <input 
            type="text" 
            placeholder="Search images"
            className="w-full px-3 py-4 rounded-md text-sm outline-none text-gray-900" />
        </div>
    )
}

export default SearchBar;