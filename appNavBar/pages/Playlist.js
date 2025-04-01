import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Playlist() {
  return (
    <View style={estilo.container}>

      <Text style={estilo.titulo}>
        Playlists
      </Text>


      <View style={{ alignSelf: 'center', alignItems: 'center' }}>
        <Text style={estilo.subtitle}>
          Favoritas
        </Text>
        <Image source={require('../assets/estrela.png')}
          style={{ width: 220, height: 220, marginTop: 10 }} />
      </View>

      <View style={estilo.linha}></View>

      <View style={estilo.musicView}>
        <View>
          <Text style={estilo.musictitle}>
            Coelinho
          </Text>
          <Text style={estilo.musicsubtitle}>
            Saia Rodada
          </Text>
        </View>
        <Image source={require('../assets/dot.jpg')}
          style={{ width: 40, height: 70 }} />
      </View>


    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  titulo: {
    marginTop: 30,
    marginLeft: 15,
    fontSize: 30,
    fontWeight: 800,
    color: 'white',
    letterSpacing: 5,
    fontFamily: 'Roboto'
  },
  subtitle: {
    color: 'white',
    marginTop: 15,
    fontSize: 35,
    fontWeight: 800,
  },
  artistas: {
    marginTop: 15,
    marginLeft: 10,
    flexDirection: 'row',
  },
  musictitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800'
  },
  musicsubtitle: {
    color: 'white',
    fontSize: 15,
  },
  marginL: {
    marginLeft: 14.5
  },
  linha: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'white',
    width: '100%',
    borderRadius: 15,
    marginBottom: 10
  },
  musicView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});
