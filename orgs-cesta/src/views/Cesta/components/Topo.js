import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import topo from '../../../../assets/topo.png'
import Texto from "../../../components/Texto";

const width = Dimensions.get('screen').width;

export default function Topo({titulo}){// Como foi passado uma descontrução de topo no Index, podemos acessar cada um de seus "atributos" definidos no mocks
    return <>
    <Image source={topo} style = {estilos.topo}/>
     <Texto style = {estilos.titulo}>{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo:{
        width: "100%", 
        height: 578 / 768 * width,
    },
    titulo:{
        color: "#FFFF",
        position: "absolute",
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16,
    },

})