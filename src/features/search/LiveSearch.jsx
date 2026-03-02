import { useState } from 'react';

/**
 * A simulated function to mimic an asynchronous API call.
 * @param {string} query The search term to simulate querying.
 * @returns {Promise<string>} A promise that resolves with a search result message.
 */
const mockApiCall = async (query) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (query.trim() === '') {
    return 'Please enter a search term.';
  }
  
  return `Successfully fetched results for: "${query}"`;
};

const LiveSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handles the API call logic. This function is called on every change.
   * @param {string} query The current value from the input field.
   */
  const handleSearch = async (query) => {
    // 1. Set loading state
    setIsLoading(true);
    setSearchResult(''); // Clear previous results

    try {
      // 2. Execute the mock API call
      const result = await mockApiCall(query);
      
      // 3. Update the result state
      setSearchResult(result);
    } catch (error) {
      // 4. Handle errors
      console.error('API call failed:', error);
      setSearchResult('An error occurred during the search.');
    } finally {
      // 5. Reset loading state
      setIsLoading(false);
    }
  };

  /**
   * Handles changes to the input field and triggers the API call.
   * @param {Object} event The change event from the input field.
   */
  const handleChange = (event) => {
    const newQuery = event.target.value;
    setSearchTerm(newQuery);
    
    // 🔥 CRITICAL: Trigger the API call immediately on every state change
    handleSearch(newQuery); 
  };
  
  // Note: The button is present but the primary search mechanism is the input change.
  const handleButtonClick = () => {
      // You can call handleSearch(searchTerm) here if you want the button to re-run the last query, 
      // but in a live search component, it often serves as a redundant action.
      alert(`Search button clicked for: ${searchTerm}`);
  };

  return (
    <section className="min-h-[50vh] flex items-center justify-center lg:px-24 md:px-10 px-4 py-20 relative overflow-hidden">
      <div className="z-40 w-full max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-white text-5xl md:text-7xl lg:text-[7.5rem] font-bold z-10 mb-10 leading-[1.05] tracking-tight text-center">
          <span className="text-gray-400">Live</span> <br />
          Search
        </h2>
        
        <div className="w-full max-w-2xl bg-[#161616] p-8 border border-gray-800 shadow-2xl flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Type to search..."
              value={searchTerm}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#111] border border-gray-800 text-[#a0a0a0] font-mono focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all outline-none"
            />
            <button 
              onClick={handleButtonClick}
              disabled={isLoading}
              className="px-8 py-3 bg-[#1a1a1a] hover:bg-[#222] text-white font-mono text-sm font-semibold transition-colors border border-gray-800 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
          
          {/* Display Search Status/Results */}
          <div className={`min-h-[60px] p-4 font-mono text-sm border ${isLoading ? 'border-yellow-900/50 text-yellow-200' : searchResult ? 'border-green-900/50 text-green-200 bg-[#1e443b]/40' : 'border-gray-800 text-gray-500'} transition-all`}>
            {isLoading && <p className="animate-pulse">Loading results...</p>}
            {!isLoading && searchResult && <p className="break-all">{searchResult}</p>}
            {!isLoading && !searchResult && <p>Waiting for query...</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSearch;