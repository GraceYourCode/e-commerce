import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="bg-secondary rounded-md px-5 py-2 *:bg-transparent flex items-center">
      <input type="text" placeholder="What are you looking for?" className="text-xs"/>
      <IoSearch />
    </div>
  )
}

export default SearchBar
