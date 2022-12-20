import React from "react";
import {StyleSheet, View, FlatList} from 'react-native'; //posui chave pois é um componente exportado 


import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Item from "./components/Item";
import Texto from "../../components/Texto";


export default function Cesta({topo, detalhes, itens}){
    return <>
        <FlatList //lista de todos os itens do moks, tem exemplo na documentação do react native
            data={itens.lista} //aqui ele esta atribuindo os itens da lista para o data, seus respectivos nomes e imagens
            renderItem= {Item}//aqui ele esta renderizando o data de acordo com o "componente" Item, no qual recebe como parametro um item possuindo o nome e imagem, igual definido no data
            keyExtractor={({nome}) => nome} //obrigatorio para definir key para as view gerada do renderItem
            ListHeaderComponent = {() => {
                return<>
                     <Topo {...topo}/*passando uma descontrução do detalhes como parametro*//>
                     <View style = {estilos.cesta}>
                        <Detalhes {...detalhes}/*passando uma descontrução do detalhes como parametro*//>
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
        
    </>
}

const estilos= StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16,
    },
})