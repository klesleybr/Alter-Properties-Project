import { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Properties() {
    const [text, setText] = useState("AOOOOOOOOOOOOOOOOOO, POTÊNCIA");
    const colors = [
        {
            id: 1,
            title: "Dark"
        },
        {
            id: 2,
            title: "Light"
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

    return(

        <SafeAreaView>

            <View>
                <Text>Aqui você muda a cor do background</Text>
                <FlatList data = {colors} 
                renderItem = {({item}) => <TouchableOpacity><Text>{item.title}</Text></TouchableOpacity>}>                    
                </FlatList>
            </View>

            <View>
                <Text>Aqui você define uma frase</Text>
                <Text>{text}</Text>
                <TextInput></TextInput>
                <Button title = "Definir Frase" onPress = {() => {setText("")}}></Button>
            </View>

        </SafeAreaView>

    );

}