import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, 
    TouchableOpacity, View, FlatList, SafeAreaView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const colors = [
    {

        id: 1,
        title: "Dark",
        buttonColor: "#414141",
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

            touchableOpacity: {
                borderBottomWidth: 1,
                borderBottomColor: "#ffffff",
            },            

            selectStyleText: {
                fontSize: 20,            
                paddingVertical: "5%",
            },

            textContainer: {
                alignItems: "center",
                width: "100%",
                gap: 20,
                marginBottom: "20%",
            },        

            textInput: {
                backgroundColor: "#d6d6d6",                
                width: "80%",
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
        buttonColor: "#191999",
        properties: StyleSheet.create({
            
            container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f3f3f3",
                width: "100%",
                height: "100%",
                paddingHorizontal: "10%",
                paddingVertical: "3%",

            },            

            touchableOpacity: {
                borderBottomWidth: 1,
                borderBottomColor: "#000000",
            },
        
            selectStyleText: {
                fontSize: 20,            
                paddingVertical: "5%",
            },

            textContainer: {
                alignItems: "center",
                width: "100%",
                gap: 20,
                marginBottom: "20%",
            },        

            textInput: {
                backgroundColor: "#FFF",
                width: "80%",
                borderRadius: 10,
                height: 35,
                paddingHorizontal: 15,
                borderWidth: 2,
                borderColor: "#000000",
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
        buttonColor: "#138199",
        title: "Sky",
        properties: StyleSheet.create({
            
            container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#16c3e9",
                width: "100%",
                height: "100%",
                paddingHorizontal: "10%",
                paddingVertical: "3%",

            },

            selectStyleContainer: {
                marginBottom: "20%",
            },

            touchableOpacity: {
                borderBottomWidth: 1,
                borderBottomColor: "#ffffff",
            },

            selectStyleText: {
                fontSize: 20,            
                paddingVertical: "5%",
            },

            textContainer: {
                alignItems: "center",
                width: "100%",
                gap: 20,
                marginBottom: "20%",
            },        

            textInput: {
                backgroundColor: "#c7f5ff",
                width: "80%",
                borderRadius: 10,
                height: 35,
                paddingHorizontal: 15,                
            },

            generalText: {
                color: "#f5f5f5",
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

        id: 4,
        buttonColor: "#288304",
        title: "Ganjah",
        properties: StyleSheet.create({
            
            container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#1e9a02",
                width: "100%",
                height: "100%",
                paddingHorizontal: "10%",
                paddingVertical: "3%",

            },

            selectStyleContainer: {
                marginBottom: "20%",
            },

            touchableOpacity: {
                borderBottomWidth: 1,
                borderBottomColor: "#ffffff",
            },

            selectStyleText: {
                fontSize: 20,            
                paddingVertical: "5%",
            },

            textContainer: {
                alignItems: "center",
                width: "100%",
                gap: 20,
                marginBottom: "20%",
            },        

            textInput: {
                backgroundColor: "#a8fc86",
                width: "80%",
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

        id: 5,
        title: "Sun",
        buttonColor: "#ea9017",
        properties: StyleSheet.create({
            
            container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffe22d",
                width: "100%",
                height: "100%",
                paddingHorizontal: "10%",
                paddingVertical: "3%",                

            },            

            touchableOpacity: {
                borderBottomWidth: 1,
                borderBottomColor: "#818181",
            },

            selectStyleText: {
                fontSize: 20,            
                paddingVertical: "5%",
            },

            textContainer: {
                alignItems: "center",
                width: "100%",
                gap: 20,                
                marginBottom: "20%",
            },        

            textInput: {
                backgroundColor: "#ffef89",
                width: "80%",
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

        id: 6,
        title: "Fanta",
        buttonColor: "#ca7100",
        properties: StyleSheet.create({
            
            container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fca12b",
                width: "100%",
                height: "100%",
                paddingHorizontal: "10%",
                paddingVertical: "3%",

            },            

            touchableOpacity: {
                borderBottomWidth: 1,
                borderBottomColor: "#ffffff",
            },

            selectStyleText: {
                fontSize: 20,            
                paddingVertical: "5%",                
            },

            textContainer: {
                alignItems: "center",
                width: "100%",
                gap: 20,                
                marginBottom: "20%",
            },        

            textInput: {
                backgroundColor: "#ffc376",
                width: "80%",
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
];

export default function Properties() {

    const router = useRouter();
    const [styles, setStyles] = useState(colors[0].properties);
    let textIn : string;
    const [text, setText] = useState("Qualquer sofrimento passa, mas o ter sofrido não.");    
    const [buttonColor, setButtonColor] = useState(colors[0].buttonColor);    

    return(

        <SafeAreaView style = { styles?.container }>

            <View style = {{ position: "absolute", top: 0, left: 0, padding: "5%" }}>                
                <TouchableOpacity onPress = {() => router.back()} style = {{ alignItems: "center", flexDirection: "row", gap: 10 }}>
                    <AntDesign name="arrowleft" size={ 18 } style = { styles.generalText } />
                    <Text style = { [styles.generalText, { fontSize: 18}] }>Voltar</Text>    
                </TouchableOpacity>
            </View>

            <View style = { styles?.textContainer }>
                <Text style = { [styles?.generalText, styles?.textHint] }>Aqui você define uma frase</Text>
                <Text style = { [styles?.generalText, styles?.textIn] }>"{ text }"</Text>
                <TextInput 
                    placeholder = {"Escreva aqui..."} 
                    onChangeText = {(value) => { textIn = value }} 
                    style = { styles?.textInput }>                    
                </TextInput>
                <Button title = "Definir Frase" color = { buttonColor }  onPress = {() => {setText(textIn)}  }></Button>
            </View>

            <View style = {{ width: "75%" }}>
                <Text style = { [styles?.generalText, styles?.textHint, { marginBottom: "5%" }] }>Aqui você muda o tema da tela</Text>
                <FlatList data = {colors} 
                renderItem = {({item}) => <TouchableOpacity 
                                            onPress = { () => { setStyles(item.properties); setButtonColor(item.buttonColor) }} 
                                            style = { styles?.touchableOpacity }>
                                            <Text style = { [styles?.selectStyleText, styles?.generalText] }>{item.title}</Text>
                                        </TouchableOpacity>}>                    
                </FlatList>
            </View>            
            
        </SafeAreaView>

    );

}

