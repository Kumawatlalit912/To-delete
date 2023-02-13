// import React, { useState, useEffect } from 'react';
// import { MongoClient} from 'mongodb';

// const mongodbURL = 'mongodb+srv://elmos:elmos1234@cluster0.ajxyefd.mongodb.net/?retryWrites=true&w=majority';


// const client = new MongoClient(mongodbURL);
// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     let debounceTimeout;
//     const fetchData = async () => {
//       // setIsLoading(true);
//       try {
//         const conn=await client.connect();
//         const db= client.db('movies');
//         const collection = db.collection('moviesData');
//         const data = await collection.find({ Series_Title: { $regex: `^${searchTerm}` } }).limit(10).toArray();
//         setResults(data);
//         setIsLoading(false);
//         client.close();
//       } catch (error) {
//         console.error(error);
//         setIsLoading(true);
//       }
//     };

//     if (debounceTimeout) {
//       clearTimeout(debounceTimeout);
//     }

//     if (searchTerm) {
//       debounceTimeout = setTimeout(fetchData, 500);
//     }
//   }, [searchTerm]);

//   const handleSearchTermChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <ul>
//           {results.map(result => (
//             <li key={result._id}>{result.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchBar;


