import React from "react";
import Texto from "./Texto";
import { StyleSheet, TouchableOpacity} from "react-native";


export default function Botao({style, texto, onPress}){
    return <TouchableOpacity style= {[estilos.botao, style]} onPress={onPress} /* Exite sim um button em React Native, porem ele é muito pouco estilizado, ja o TouchableOpacity permite mais alterações*/>
            <Texto style = {estilos.textoBotao}>{texto}</Texto>
        </TouchableOpacity>
}

const estilos = StyleSheet.create({
    botao:{
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao:{
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "bold",
    },

})