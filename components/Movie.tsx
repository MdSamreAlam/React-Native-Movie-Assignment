import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, ScrollView, Image, Alert } from 'react-native';
import { MovieGetModel } from './models/moviegetmodel';
import Mainstyles from './Style/MainStyle';
import { Searchbar } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />



interface MovieListData {
    movieslist: MovieGetModel[]

}


type State = {
    s: string,
    results: MovieGetModel[],
    selected: MovieGetModel

}
export const Movie = () => {
    const apiurl = "http://www.omdbapi.com/?apikey=47314d8";
    const [state, setState] = useState<State>({
        s: "Enter a movie...",
        results: [],
        selected: {} as MovieGetModel
    });



    const search = () => {
        axios(apiurl + "&s=" + state.s).then(({ data }) => {
            try {
                let results = data.Search;
                if (typeof (results) !== 'undefined' && results != null) {
                    setState(prevState => {
                        return { ...prevState, results: results }
                    })
                }
                else {
                    Alert.alert("Undefined");
                }
                console.log(results);

            }
            catch {
                console.log("Something wrong", Error);
            }

        })
    }

    const DEFAULT_PLACEHOLDER_IMAGE =
        "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


    return (
        <View style={Mainstyles.container}>
            <Text style={Mainstyles.title}>New Release Film</Text>
            <TextInput
                style={Mainstyles.searchbox} placeholder="Search movie name..."
                onChangeText={text => setState(prevState => {
                    return { ...prevState, s: text }
                })}
                onSubmitEditing={search}
                value={state.s}
            />
            <ScrollView>

                {state.results &&
                    state.results.map(result => (

                        // <Card key={result.imdbID} style={Mainstyles.resultstyle}>
                        //     <Card.Cover source={{ uri: result.Poster }} resizeMode="cover" style={Mainstyles.image} />
                        //     <View style={Mainstyles.resultstyle}>
                        //         <Card.Content>
                        //             <View style={Mainstyles.resultstyle}>
                        //                 <Text style={Mainstyles.text}>Title Of Movie:{result.Title}</Text>
                        //                 <Text style={Mainstyles.text}>Release Year:{result.Year}</Text>
                        //                 <Text style={Mainstyles.text}>Type:{result.Type}</Text>
                        //             </View>
                        //         </Card.Content>
                        //     </View>
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

                        // </Card>

                    ))}
            </ScrollView>
        </View>
    );

}

// const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#223343',
    //     alignitems: 'center',
    //     justifyContent: 'flex-start',
    //     paddingTop: 10,
    //     paddingHorizontal: 20
    // },
    // title: {
    //     color: '#fff',
    //     fontSize: 32,
    //     fontWeight: '700',
    //     textAlign: 'left',
    //     marginBottom: 20
    // },
    // searchbox: {
    //     fontSize: 20,
    //     fontWeight: '300',
    //     padding: 20,
    //     width: '100%',
    //     backgroundColor: '#fff',
    //     borderRadius: 8,
    //     marginBottom: 40
    // },
    // image: {
    //     resizeMode: "stretch",
    //     width: '100%',
    //     height: 300,
    // }
    // ,
    // results: {
    //     flex: 1,
    // },
    // resultstyle: {
    //     flex: 1,
    //     width: '100%',
    //     marginBottom: 20
    // },
    // heading: {
    //     color: 'black',
    //     fontSize: 18,
    //     fontWeight: '700',
    //     padding: 20,
    //     backgroundColor: '#fff',


    // },
    // year: {
    //     color: 'black',
    //     fontSize: 18,
    //     fontWeight: '700',
    //     padding: 20,
    //     backgroundColor: '#fff',

    // },
    // text: {
    //     backgroundColor: '#fff',
    //     fontWeight: '700',
    //     fontSize: 15,
    //     textAlign: 'center',
    //     color: 'black'
    // }

// });