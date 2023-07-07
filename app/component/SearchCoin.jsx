import { useState } from "react";

function SearchCoin({ getSearchResults }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/coins/search?query=${query}`);
    const coin = await response.json();
    getSearchResults(coin);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
<div className="bg-black pb-6">
  <form onSubmit={handleSubmit} className="flex flex-col items-center sm:flex-row sm:justify-center">
    <input
      type="text"
      value={query}
      placeholder="Search coins..."
      onChange={handleChange}
      className="px-4 py-2  mb-1 sm:mr-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue focus:ring-2 focus:ring-red-500 sm:mb-0 sm:w-auto"
    />
    <button
      type="submit"
      className="px-6 py-2 text-white bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg hover:from-red-600 hover:to-red-400 focus:outline-none  text-lg font-medium"
    >
      Search
    </button>
  </form>
</div>

  );
}

export default SearchCoin;
