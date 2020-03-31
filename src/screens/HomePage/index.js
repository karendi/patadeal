import React from 'react';
import { SafeAreaView }  from 'react-navigation';
import { View, Text, StyleSheet, Image } from 'react-native';

// page styles
const styles = StyleSheet.create({
    page:{
        flex: 1
    },
    header: {
        flex: 2,
        flexDirection:'row',
        justifyContent : 'space-between',
    },

    headerText: {
        position: "relative",
        top: 100,
        left: 40,
        justifyContent: "flex-start"
    },

    headerGreeting:{
        color: "#C4C4C4",
        fontSize: 20
    },

    headerName: {
        color: "#000000",
        fontSize: 34,
        fontWeight: "bold"
    },

    headerImage: {
        backgroundColor: "#5C48E0",
        position: 'absolute',
        right: 10,
        top: 40,
        width: 150,
        height: 150,
        borderRadius: 150/2
    },

    searchArea:{
        flex:  1,
        alignItems: "center",
        justifyContent: "center"
    },

    searchBar: {
        backgroundColor: "#C4C4C4",
        borderRadius: 10,
        width: 350,
        height: 55,
        alignItems: "center",
        justifyContent: "center"
    },

    content: {
        flex: 4,
        backgroundColor: "black"

    }
});

const HomePage = ()=>(
    <SafeAreaView style={styles.page}>
        <View style={styles.header}>
            <View style={styles.headerText}>
                <Text style={styles.headerGreeting} >Hello,</Text>
                <Text style={styles.headerName}>Sharon!</Text>
            </View>
            <View style={styles.headerImage}/>
        </View>
        <View style={styles.searchArea}>
            <View style={styles.searchBar}>
                <Text>Search product</Text>
            </View>
        </View>
        <View style={styles.content}>
            <Text>HomePage</Text>
        </View>
    </SafeAreaView>
);

export default HomePage;