import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term,
                    location: 'saint louis, mo',
                    limit: 50
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Ooops! Something went wrong! 🥴');
        }
    };

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi()}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We Have Found {results.length} Results</Text>
        </View>
    );
};

const styles = StyleSheet.create();

export default SearchScreen;