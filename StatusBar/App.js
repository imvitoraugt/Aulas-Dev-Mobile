import { StyleSheet, Text, View, StatusBar, Button, Alert } from 'react-native';

export default function App() {

  const alertaEsconder = () => {
    Alert.alert(
      'Alerta!',
      'Você escondeu StatusBar!',
    )
  }
  const alertaMostrar = () => {
    Alert.alert(
      'Alerta',
      'Você mostrou StatusBar!',
    )
  }
  const alerta3Botoes = () => {
    Alert.alert(
      'Alert com 3 opções', 'Deseja testar o botão com 3 botões?', [
        {text : 'Sim', onPress : () => { Alert.alert('Alerta','Você escolheu Sim!')}},
        {text : 'Não', onPress : () => { Alert.alert('Alerta','Você escolheu Não!')}},
        {text : 'Perguntar depois', onPress : () => { Alert.alert('Alerta','Você escolheu Perguntar depois!')}}
      ], {cancelable : false}
    )
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.txthead}>Olá! Esta é a página inicial. Seja bem-vindo(a)!</Text>
      <StatusBar barStyle={'light-content'}/>
      <Text style = {styles.text}>
        Estou utilizando Statusbar.
      </Text>
      <Button color ='#00f' title='Mostrar statusbar' onPress={() => {
        StatusBar.setHidden(false)
        StatusBar.setBarStyle('dark-content')
        alertaMostrar()
      }}/>
      <View style = {styles.meio}/>
      <Button color ='#044' title='Esconder statusbar' onPress={() => {
        StatusBar.setHidden(true)
        StatusBar.setBarStyle('dark-content')
        alertaEsconder()
      }}/>

      <View style = {styles.fim}>
        <Text style = {styles.text}> Utilizando Alert.</Text>
        <Button title="Alerta com 3 botões" onPress={ () => alerta3Botoes()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txthead : {
    color : '#ef4',
    textAlign : 'center',
    fontFamily : 'monospace',
    fontSize : 20,
    fontStyle : 'italic',
    fontWeight : 'bold',
    padding : 30,
  },
  text : {
    color : '#ecdd3cff',
    textAlign : 'center',
    fontFamily : 'monospace',
    fontSize : 20,
    padding : 15,
  },
  meio : {
    padding : 10,
  },
  fim : {
    padding : 40,
  }
});
