import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <Text style = {styles.text}>
        Essa é a página inicial! Estou utilizando Statusbar.
      </Text>
      <View style = {styles.meio}>
      <Button color ='#00f' title='Mostrar statusbar' onPress={() => {
        StatusBar.setHidden(false)
        StatusBar.setBarStyle('dark-content')
      }}/>
      </View>
        
      <View style = {styles.botoes}/>
      <Button color ='#044' title='Esconder statusbar' onPress={() => {
        StatusBar.setHidden(true)
        StatusBar.setBarStyle('dark-content')
      }}/>
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
  text : {
    color : '#ecdd3cff',
    textAlign : 'center',
    fontFamily : 'monospace',
    fontSize : 20,
  },
  meio : {
    padding : 10,
  }
});
