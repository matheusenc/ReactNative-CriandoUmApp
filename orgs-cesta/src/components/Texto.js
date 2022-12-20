import React from "react";
import { Text,StyleSheet } from "react-native";

export default function Texto({children, style}){ //children é todo o contudo que estara dentro do elemento, no nosso caso todo o texto que estara dentro da tag, alem disso é passado o style como parametro afim de pegar todo o estilodo do children
    let estilo = estilos.texto; //criamos uma variavel para receber o estilo do children

    if (style?.fontWeight === 'bold') { //caso o children tenha um style (esse é o papel da ?), ele ira verificar se ele tem um fontWeight = a bold e assim ira aplicar a fonte em negrito
        estilo = estilos.textoNegrito;
    }

    return <Text style = {[style, estilo]}>{children}</Text> //o style esta recebendo um arrya para que o children não perca seu style definido no Cesta.sj
}

const estilos = StyleSheet.create({
    texto: {
        fontWeight: "normal",
        fontFamily: "MontserratRegular"
    },
    textoNegrito: {
        fontWeight: "normal",
        fontFamily: "MontserratBold"
    }
})

