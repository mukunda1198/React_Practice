import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fakeData = [
    "apple",
    "banana",
    "orange",
    "grape",
    "pineapple",
    "watermelon",
    "strawberry",
    "kiwi",
    "blueberry",
    "melon"
  ];

  const searchAPI = async (term) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const results = fakeData.filter(
          (item) =>
            item.toLowerCase().includes(term.toLowerCase())
        );
        resolve(results);
      }, 500);
    });
  };

  useEffect(() => {
    const timerId = setTimeout(async () => {
      const results = await searchAPI(searchTerm);
      setSearchResults(results);
    }, 300);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
