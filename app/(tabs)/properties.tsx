import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ViewStyle } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const colors = [
    {
        id: 1,
        title: "Dark",
        properties: StyleSheet.create({
            
            container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#5d5d5d",
                width: "100%",
                height: "100%",
                paddingHorizontal: "10%",
                paddingVertical: "3%",

            },

            textContainer: {
                alignItems: "center",
                width: "100%",
                gap: 20,
            },

            textInput: {
                backgroundColor: "#FFF",
                width: "90%",
                borderRadius: 10,
                height: 35,
                paddingHorizontal: 15,
            },

            generalText: {
                color: "#FFF",
                textAlign: "center",
            },

            textHint: {
                opacity: 0.65,
            },

            textIn: {
                width: "100%",
                fontSize: 20,
                fontWeight: "bold",
            },
            
        }),
                    
    },
    {
        id: 2,
        title: "Light",
        properties: StyleSheet.create({
            
            container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
                width: "100%",
                height: "100%",
                paddingHorizontal: "10%",
                paddingVertical: "3%",

            },

            textContainer: {
                alignItems: "center",
                width: "100%",
                gap: 20,
            },

            textInput: {
                backgroundColor: "#FFF",
                width: "90%",
                borderRadius: 10,
                height: 35,
                paddingHorizontal: 15,
            },

            generalText: {
                color: "#000000",
                textAlign: "center",
            },

            textHint: {
                opacity: 0.65,
            },

            textIn: {
                width: "100%",
                fontSize: 20,
                fontWeight: "bold",
            },
            
        }),
    },
    {
        id: 3,
        title: "Sky"
    },
    {
        id: 4,
        title: "Ganjah"
    },
    {
        id: 5,
        title: "Sun"
    },
    {
        id: 6,
        title: "Fanta"
    },
];

export default function Properties() {
    const [styles, setStyles] = useState(colors[0].properties);
    let textIn : string;
    const [text, setText] = useState("A burguesia fede, mas tem dinheiro para comprar perfume...");    

    

    return(

        <SafeAreaView style = { styles?.container }>

            <View>
                <Text>Aqui você muda a cor do background</Text>
                <FlatList data = {colors} 
                renderItem = {({item}) => <TouchableOpacity onPress = { () => {setStyles(item.properties)}}><Text>{item.title}</Text></TouchableOpacity>}>                    
                </FlatList>
            </View>

            <View style = { styles?.textContainer }>
                <Text style = { [styles?.generalText, styles?.textHint] }>Aqui você define uma frase</Text>
                <Text style = { [styles?.generalText, styles?.textIn] }>"{ text }"</Text>
                <TextInput onChangeText = {(value) => { textIn = value }} style = { styles?.textInput }></TextInput>
                <Button title = "Definir Frase" onPress = {() => {setText(textIn)}}></Button>
            </View>

        </SafeAreaView>

    );

}

