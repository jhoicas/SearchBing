import { useState, useEffect } from 'react';
import {API_BING_KEY} from '../utils/constants'; 
import {Value, ErrorInfo}  from '../Interfaces/apiInterface';

export const useSearch = ({query}: {query: string}) => {
    const [searchResults, setSearchResults] = useState<Value[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<ErrorInfo| null>(null);
  
    useEffect(() => {
      if (query) {
        setIsLoading(true);
        setError(null);
  
        fetch(`https://api.bing.microsoft.com/v7.0/search?q=${query}&count=10`, {
          headers: {
            'Ocp-Apim-Subscription-Key': API_BING_KEY,
          },
        })
          .then((response) => response.json())
          .then((data) => setSearchResults(data.webPages.value))
          .catch((error) => setError(error))
          .finally(() => setIsLoading(false));
      } else {
        setSearchResults([]);
      }
    }, [query]);
  
    return { searchResults, isLoading, error };
  }