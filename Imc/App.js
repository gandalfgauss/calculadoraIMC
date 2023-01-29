/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight, TextInput, Alert, Image } from 'react-native';


export default function App(){

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  

  const calcImc = () =>{
    if(peso == 0 || !peso)
    {
      Alert.alert("Informe o peso.");
    }
    if(altura == 0 || !altura)
    {
      Alert.alert("Informe a Altura.");
    }

    const r = peso/(altura**2);
    setResultado(r.toFixed(1));
  }

  return(
    <SafeAreaView
      style={estilos.corpo}
    >
      <View style={estilos.bloco}>
        <Text> Calculadora IMC </Text>
      </View>
      <View style={estilos.bloco}>
        <Text> Informe seu Peso: </Text>
        <TextInput
          autoFocus ={true}
          keyboardType={"numeric"}
          value = {`${peso}`}
          onChangeText = {text => setPeso(text)}
          style={estilos.txt}
        > 
        </TextInput>
      </View>

      <View style={estilos.bloco}>
        <Text> Informe sua Altura: </Text>
        <TextInput
          autoFocus ={false}
          keyboardType={"numeric"}
          value = {`${altura}`}
          onChangeText = {text => setAltura(text)}
          style={estilos.txt}
        > 
        </TextInput>
      </View>


      <View style={estilos.bloco}>
        <TouchableHighlight
          style={estilos.btnCalc}
          onPress={()=> calcImc()}
        >
          <Text
            style={estilos.txtbtn}
          > Calcular IMC </Text>
        </TouchableHighlight>
      </View>


      <View style={estilos.bloco}>
        <Text> Resultado {resultado} </Text>
        
      </View>
      <View style={estilos.bloco}>
        <Image
          source={require("./tabela_imc.jpg")}
          style={estilos.imagem}
        />
        
      </View>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  txt:{
    width:"100%",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10 ,
    borderRadius : 10,
  },

  corpo:{
    padding:10
  },

  bloco:{
    marginBottom: 20
  },

  btnCalc:{
    backgroundColor: "#049",
    justifyContent : "center",
    alignItems: "center",
    padding: 10,
    borderRadius : 20,
  },

  txtbtn:{
    fontSize : 15,
    textTransform: "uppercase",
    color : "#fff"
  },

  imagem:{
    width:"100%",
    height:200,
    resizeMode:"contain",
  }
})