import { View, Text } from 'react-native'
import React from 'react'
import { Ejercicios } from '../modelos/Ejercicios';
import ListaAsignatura from './ListaAsignatura';


export default function OperacionesAritmeticas({periodoTiempo,
  diasEntrenamiento,
  totalHoras,
   promedio,
  cumplido,
  rating,
    descripcion}: Ejercicios) {



    return (
        <View>
            <Text>Resultados Operaciones</Text>
            <Text>Resultado del promedio : {promedio}</Text>
            <Text>Resultado del periodoTiempo : {periodoTiempo}</Text>
            <Text>Resultado del dias Entrenamiento : {diasEntrenamiento}</Text>
            <Text>Resultado del total de Horas : {totalHoras}</Text>
            <Text>Resultado del meta : {cumplido}</Text>
            <Text>Resultado del rating : {rating}</Text>
            <Text>Resultado descripcion : {descripcion}</Text>
        </View>
    )
}