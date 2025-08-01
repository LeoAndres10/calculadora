import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Asignatura } from './modelos/Asignatura';
import OperacionesAritmeticas from './componentes/OperacionesAritmeticas';
import ListaAsignatura from './componentes/ListaAsignatura';

export default function App() {
   let asignatura: Asignatura = {
    nombreAsignatura: 'Desarrollo Movil',
    numeroHoras: 3
  }
function calculateExercises(horasDia: number[], meta: number): any{
  const periodoTiempo = 7;
  const diasEntrenamiento = horasDia.filter(h => h > 0).length;
  const totalHoras = horasDia.reduce((sum, h) => sum + h, 0);
  const promedio = totalHoras / periodoTiempo;
  const cumplido = promedio >= meta;

  let rating: number;
  let descripcion: string;

  if (promedio >= meta) {
    rating = 3;
    descripcion = "Se cumple con el objetivo";
  } else if (promedio >= meta * 0.75) {
    rating = 2;
    descripcion = "Debes mejorar";
  } else {
    rating = 1;
    descripcion = "Necesitas esforzarte más para alcanzar el objetivo.";
  }


return{
    promedio,
    periodoTiempo,
    diasEntrenamiento,
    totalHoras,
    cumplido: 0,
    rating,
    descripcion
};
}

  function sumarNumeros(a: number, b: number): number {
    return a + b;
  }

  type operaciones = 'multiplicar' | 'Sumar' | 'Restar';

  let operacion:operaciones='multiplicar'
  return (

    <View style={styles.container}>
      <Text>Primera aplicacion en React Native</Text>

      <Text>Nombre Asignatura : {asignatura.nombreAsignatura}</Text>
      <Text>Numero de  Hooras : {asignatura.numeroHoras}</Text>
      <Text>Resultado Suma: {sumarNumeros(3, 3)}</Text>
      
      <OperacionesAritmeticas periodoTiempo={5} diasEntrenamiento={10} totalHoras={10} promedio={40} cumplido={10} rating={10} descripcion='Hay que mejorar'></OperacionesAritmeticas>
      <Text>Resultados: {calculateExercises([3,0,2,4.5,0,3,1],2)}</Text>
      <ListaAsignatura></ListaAsignatura>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
