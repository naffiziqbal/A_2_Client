"use client";
const Search = () => {
  return (
    <div className="mt-6 w-full flex flex-row">
      <input
        className="p-3 rounded-l-lg border outline-none bg-transparent w-full "
        type="text"
        placeholder="Search Category....."
      />
      <input
        type="submit"
        className="w-1/4 bg-gradient-to-tr  from-orange-600 to-red-500 p-3 rounded-r-lg border border-transparent cursor-pointer"
      />
    </div>
  );
};

export default Search;
