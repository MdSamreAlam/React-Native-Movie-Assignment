import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import { MovieGetModel } from './models/moviegetmodel';
import Mainstyles from './Style/MainStyle';


interface MovieListData {
    movieslist: MovieGetModel[]

}

const MovieList = ({ movieslist }: MovieListData) => {
    return (
        <View style={Mainstyles.container}>
            <Text style={Mainstyles.title}>New Release Film</Text>
            <ScrollView>
                {movieslist.map(result => (
                    <View key={result.imdbID} style={Mainstyles.resultstyle}>

                        <Image
                            source={{ uri: result.Poster }}
                            resizeMode="cover" style={Mainstyles.image}
                        />
                        <View style={Mainstyles.resultstyle}>
                            <Text style={Mainstyles.text}>Title Of Movie:{result.Title}</Text>
                            <Text style={Mainstyles.text}>Release Year:{result.Year}</Text>
                            <Text style={Mainstyles.text}>Type:{result.Type}</Text>
                        </View>
                    </View>
                ))}

            </ScrollView>
        </View>

        // <View style={styles.container}>

        //     {/* <Text style={styles.title}>New Release Film</Text> */}
        //     {/* <TextInput
        //         style={styles.searchbox}

        //     /> */}
        //     <ScrollView>
        //         {movieslist.map((movie) => (
        //             <View key={movie.imdbID} style={styles.resultsstyle}>
        //                 <Image
        //                     source={{ uri: movie.Poster }}
        //                     resizeMode="cover" style={{
        //                         width: '100%', height: 200,
        //                         flexDirection: 'row',
        //                         flexWrap: 'wrap', resizeMode: 'cover',

        //                     }}
        //                 />
        //                 <Text style={styles.heading}>Title:{movie.Title}</Text>
        //                 <Text style={styles.year}>Release Year:{movie.Year}</Text>
        //             </View>

        //         ))}
        //     </ScrollView>


    );
};

export default MovieList;

// const styles = StyleSheet.create({
//     container: {
//         // backgroundColor: '#223343',
//         alignitems: 'center',
//         justifyContent: 'flex-start',
//         paddingTop: 10,
//         paddingHorizontal: 20,
//     },
//     title: {
//         color: '#fff',
//         fontSize: 32,
//         fontWeight: '700',
//         textAlign: 'left',
//         marginBottom: 20,
//         marginTop: 20
//     },

//     results: {
//         flex: 1,
//     },
//     resultsstyle: {
//         flex: 1,
//         width: '100%',
//         marginBottom: 10
//     },
//     heading: {
//         color: 'black',
//         fontSize: 18,
//         fontWeight: '700',
//         padding: 20,
//         backgroundColor: '#fff',

//     },
//     year: {
//         color: 'black',
//         fontSize: 18,
//         fontWeight: '700',
//         padding: 20,
//         backgroundColor: '#fff',
//         marginBottom: 10,
//     },
//     searchbox: {
//         fontSize: 20,
//         fontWeight: '300',
//         padding: 20,
//         width: '100%',
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         marginBottom: 40
//     }

// });



