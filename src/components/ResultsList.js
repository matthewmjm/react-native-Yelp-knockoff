import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    // return <Text>{item.name}</Text>
                    return <ResultsDetail result={item} />
                }}
            />
            {/* <Text>Results: {results.length} Restaurants</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;