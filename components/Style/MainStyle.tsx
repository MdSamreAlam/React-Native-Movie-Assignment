import { StyleSheet } from "react-native";

const Mainstyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#223343',
        alignitems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingHorizontal: 20
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'left',
        marginBottom: 20
    },
    searchbox: {
        fontSize: 20,
        fontWeight: '300',
        padding: 20,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 40
    },
    image: {
        resizeMode: "stretch",
        width: '100%',
        height: 300,
    }
    ,
    results: {
        flex: 1,
    },
    resultstyle: {
        flex: 1,
        width: '100%',
        marginBottom: 20
    },
    heading: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        padding: 20,
        backgroundColor: '#fff',


    },
    year: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        padding: 20,
        backgroundColor: '#fff',

    },
    text: {
        backgroundColor: '#fff',
        fontWeight: '700',
        fontSize: 15,
        textAlign: 'center',
        color: 'black'
    }

})
export default Mainstyles;
