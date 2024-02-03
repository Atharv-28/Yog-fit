// App.js
import React from 'react';
import { Text, SafeAreaView, StyleSheet, StatusBar, View, ScrollView, Button } from 'react-native';
const EYPage = () => {
    return (
        <ScrollView style={styles.sv}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Text style={styles.title}>TITLE</Text>
                    <Text style={styles.desp}>     human beings and their immediate ancestors have existed on Earth for at least two million years. For more than 99 percent of that time, hominids lived a nomadic existence and survived by hunting and gathering food. It is obvious that this way of life was enormously different from the way people live today in developed countries. Thus, evolutionary history has prepared humankind</Text>
                    <Text style={styles.benefits}><Text style={styles.txt}>Benefits: </Text>human beings and their immediate ancestors have existed on Earth for at least two million years. For more than 99 percent of that time, hominids lived a nomadic existence and survived by hunting and gathering food. It is obvious that this way of life was enormously different from the way people live today in developed countries. Thus, evolutionary history has prepared humankind</Text>
                    <Text style={styles.Ts}><Text style={styles.txt}>Time/Sets: </Text>human beings and their immediate ancestors have existed on Earth for at least two million years. For more than 99 percent of that time, hominids lived a nomadic existence and survived by hunting and gathering food. It is obvious that this way of life was enormously different from the way people live today in developed countries. Thus, evolutionary history has prepared humankind</Text>
                    <View style={styles.pp}> 

                    <Text style={styles.txt}>Procedure:</Text>

                    <Text style={styles.txt1}><Text style={styles.pts}>1.</Text>Exercise, the training of the body to improve its function and enhance its fitness.</Text>
                    <Text style={styles.txt1}><Text style={styles.pts}>2.</Text>Exercise, the training of the body to improve its function and enhance its fitness.
                    </Text>
                    <Text style={styles.txt1}><Text style={styles.pts}>3.</Text>Exercise, the training of the body to improve its function and enhance its fitness.

                    </Text >
                    <Text style={styles.txt1}><Text style={styles.pts}>4.</Text>Exercise, the training of the body to improve its function and enhance its fitness.

                    </Text >
                    <Text style={styles.txt1}><Text style={styles.pts}>5.</Text>Exercise, the training of the body to improve its function and enhance its fitness.

                    </Text>
</View>
<View style={styles.btm}>
<Text style={styles.btn}>Start</Text>
</View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    safeArea: {

        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
        marginLeft: 10,
        marginRight: 10,

    },
    sv: {
        flexGrow: 1,
    },
    container: {
        borderColor: "yellow",
        borderWidth: 2,
        flex: 1,
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    desp: {
        fontSize: 17,
        textAlign: "justify",
    },
    benefits: {
        fontSize: 17,
        textAlign: "justify",

    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "blue"

    },
    Ts: {
        fontSize: 17,
        textAlign: "justify",


    }
    ,
    pp: {
        fontSize: 20,
        textAlign: "justify",
    },
txt1:{
    fontSize: 17,
    textAlign: "justify",
    marginTop:2
},
pts: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "orange"

},
btn:{
width:150,
borderWidth:2,
height:50,
textAlign:"center",
textAlignVertical:"center",
fontSize:20,
color:"white",
backgroundColor:"orange",
borderRadius:50,
borderColor:"orange",
shadowColor: '#171717',
shadowOffset: {width: -2, height: 4},
shadowOpacity: 0.2,
shadowRadius: 3,
},
btm:{
alignItems:"center",
margin:20
}
});
export default EYPage;