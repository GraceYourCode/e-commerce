import { IoSearch } from "react-icons/io5";

const SearchBar = ({addedClass}: {addedClass: string}) => {
  return (
    <div className={`bg-secondary rounded-md px-5 py-2 *:bg-transparent items-center ${addedClass}`}>
      <input type="text" placeholder="What are you looking for?" className="text-xs w-full"/>
      <IoSearch className="text-2xl"/>
    </div>
  )
}

export default SearchBar
