import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('API call made!')
        try {
            const response = await yelp.get('/search', {
                params: {
                    location: 'saint louis, mo',
                    limit: 50,
                    term: searchTerm
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Ooops! Something went wrong! 🥴');
        }
    };

    // Call searchApi when component
    // is first rendered.  BAD CODE!
    // searchApi('pasta') <----- does an infinite loop
    // instead, use the useEffect hook with an empty array as second argument
    
    useEffect(() => {
        searchApi('american');
    }, []);

    return [searchApi, results, errorMessage];
};