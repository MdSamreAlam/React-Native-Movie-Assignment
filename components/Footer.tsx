import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './Style/FooterStyle';


export const Footer = () => {
    //View to set in Footer
    return (
        <View style={styles.headerFooterStyle}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#fff' }}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <Text>
                            ...Home
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <Text>
                            ...Settings
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
};



