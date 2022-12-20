import React from "react";
import { View, StyleSheet, Image, TouchableOpacity} from "react-native";
import Texto from "../../../components/Texto";
import Botao from "../../../components/Botao";

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}){ // Como foi passado uma descontrução de detalhes no Index, podemos acessar cada um de seus "atributos" definidos no mocks
    return<>
        <Texto style ={estilos.nome}>{nome}</Texto>
        
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}/>
            <Texto style = {estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        
        <Texto style = {estilos.descricao}>{descricao}</Texto> 
        <Texto style = {estilos.preco}>{preco}</Texto>
        <Botao texto={botao} style={estilos.botao} onPress={() => {}} /> 
    </>
}

const estilos = StyleSheet.create({
    nome:{
        fontSize: 26,
        lineHeight: 42,
        color:"#464646",
        fontWeight: "bold",
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",
    },
    imagemFazenda:{
        width: 32,
        height: 32,
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco:{
        color:"#2A9F85",
        fontWeight:"bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao:{
        marginTop: 16,
    },
})
