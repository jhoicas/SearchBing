import { useState } from 'react';
import { useSearch } from '../hooks/useSearch';

function Search() {
  const [query, setQuery] = useState('');
  const { searchResults, isLoading, error } = useSearch({ query });

  return (
    <div className="bg-white flex flex-col items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search query"
        className="search-bar"
      />
       {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {searchResults.length > 0 && (
    <ul className="mt-4 space-y-4 flex">
    {searchResults.map((result) => (
        
      <li key={result.id} className="py-4"> 
        <a href={result.url} className="text-lg font-medium">{result.name}</a>
        <p className="text-gray-500">{result.snippet}</p>
      </li>
    ))}
  </ul>
      )}
   </div>
  );
}

export default Search;