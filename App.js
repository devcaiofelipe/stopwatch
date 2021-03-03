import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      btnInitialText: 'Iniciar',
      lastTimer: 0
    }

    this.isActive = null;

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);

    
  };

  iniciar() {
    if(this.isActive != null) {
      clearInterval(this.isActive);
      this.isActive = null;
      this.setState({ btnInitialText: 'Iniciar' });
    } else {
      this.isActive = setInterval(() => {
        this.setState({ timer: this.state.timer + 0.1});
      }, 100);
      this.setState({ btnInitialText: 'Pausar' });
    };   
  };

  limpar() {
    if(this.isActive != null) {
      this.setState({ lastTimer: this.state.timer });
      clearInterval(this.isActive);
      this.isActive = null;
      this.setState({ timer: 0 });
      this.setState({ btnInitialText: 'Iniciar' });
    }
    
  };

  render() {
    return(
      <View style={ styles.container }>
        <Image source={require('./src/cronometro.png')}
          style={ styles.cronometro }/>
          <Text style={ styles.timer }> { this.state.timer.toFixed(1) } </Text>

          <View style={ styles.btnArea }>
            <TouchableOpacity style={ styles.btn } onPress={ this.iniciar }>
              <Text style={ styles.btnTexto }>{ this.state.btnInitialText }</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.btn } onPress={ this.limpar }>
              <Text style={ styles.btnTexto }>Limpar</Text>
            </TouchableOpacity>
          </View>

          <Text style={ styles.lastTimer }>
            <Text style={ styles.lastTimerText }>Último Tempo: </Text>{ this.state.lastTimer.toFixed(1) }s
          </Text>

      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9 
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  lastTimer: {
    fontSize: 25,
    marginTop: 50,
    marginBottom: -120,
    color: '#FFF'
  },
  lastTimerText: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#FFF',
  }
});

export default App;
