import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$  || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We Have Found {results.length} Results</Text>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="A Bit Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Hey Big Spender" />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;