import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style/HeaderStyle';



export const ListHeader = () => {
    //View to set in Header
    return (
        <View style={styles.headerFooterStyle}>
            <Text style={styles.textStyle}>SHOP</Text>
        </View>
    );
};



// const styles = StyleSheet.create({
//     headerFooterStyle: {
//         width: '100%',
//         height: 60,
//         backgroundColor: '#606070',
//     },
//     textStyle: {
//         textAlign: 'left',
//         color: '#fff',
//         fontSize: 18,
//         padding: 10,
//         paddingTop: 10,
//         paddingLeft: 20
//     }

// });