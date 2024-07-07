import { FaSearch } from "react-icons/fa"

function SearchBox() {
  return (
    <div className="m-auto flex w-[250px] items-center justify-center gap-1 rounded-md bg-[#F5F5F5]">
          <input
            className="font-mont h-8 bg-[#F5F5F5] text-sm outline-none"
            placeholder="What are you looking for?"
            type="text"
          />
          <button>
            <FaSearch />
          </button>
        </div>
  )
}

export default SearchBox
