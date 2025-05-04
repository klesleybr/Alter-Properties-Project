
import { Platform, StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from "expo-router";
import { ScrollView } from 'react-native-gesture-handler';


export default function HomeScreen() {

  return (
    <SafeAreaView style = { styles.container }>

      <Image source = {require("../../assets/images/cat.gif")} style = { styles.gif } 
        alt = "gatinho descobriu que precisa programar em java para to get money (mentira, eu amo java)"></Image>

      <ScrollView contentContainerStyle = {{ height: "100%", justifyContent: "center", marginVertical: "12%", marginHorizontal: "5%" }}>

        <View>
          <Text style = { styles.title }>Bem-vindo...</Text>
          <Text style = { styles.subTitle1 }>Este é um simples aplicativo de mudança de propriedades de uma tela.</Text>
          <Text style = { styles.subTitle2 }>Não é nada que te impressione, juro.</Text>
        </View>

        <View style = { styles.assets }>
          <Text style = {[{ textAlign: "center", marginBottom: 8, }, styles.generalText]}>Aqui, você pode:</Text>
          <Text style = { styles.generalText }>- Mudar o texto usando o botão Definir Texto.</Text>
          <Text style = { styles.generalText }>- Mudar a cor de fundo do aplicativo.</Text>          
        </View>

        <View style = { styles.linkContainer }>
          <Link href = "/properties" style = { styles.link }>Próximo</Link>
        </View>

      </ScrollView>

    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  
  container: {
    backgroundColor: "#5d5d5d",
    width: "100%",
    height: "100%",    
  },

  gif: {
    height: 300,
    width: "100%",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
  },

  subTitle1: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 10,
  },

  subTitle2: {
    color: "#FFFFFF",
    textAlign: "center",
    opacity: 0.5
  },

  generalText: {
    color: "#FFFFFF",
    fontSize: 15,
  },

  assets: {
    marginTop: 10,
    marginBottom: 40,
  },

  linkContainer: {
    justifyContent: "center",
    width: "100%",
    paddingBottom: "15%",
  },

  link: {
    position: "absolute",    
    right: 45,
    fontSize: 23,
    color: "#c8c8c8",
    textDecorationLine: "underline",
  }

});
