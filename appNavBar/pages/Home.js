import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>

      <Text style={estilo.titulo}>
        Deezer
      </Text>

      <Text style={estilo.subtitle}>
        Seus artistas favoritos
      </Text>

      <View style={estilo.artistas}>

        <View>
          <Image source={require('../assets/brunomars.jpg')}
            style={{ width: 110, height: 110, borderRadius: 10 }} />
          <Text style={estilo.musictitle}>
            Bruno Mars
          </Text>
        </View>

        <View style={estilo.marginL}>
          <Image source={require('../assets/conangay.jpg')}
            style={{ width: 110, height: 110, borderRadius: 10}} />
          <Text style={estilo.musictitle}>
            Conan Grey
          </Text>
        </View>

        <View style={estilo.marginL}> 
          <Image source={require('../assets/fabgodamn.jpg')}
            style={{ width: 110, height: 110, borderRadius: 10}} />
          <Text style={estilo.musictitle}>
            Fab Godamn
          </Text>
        </View>

      </View>

      <Text style={estilo.subtitle}>
        Recomendados
      </Text>

      <View style={estilo.artistas}>

        <View>
          <Image source={require('../assets/matue4.webp')}
            style={{ width: 110, height: 110, borderRadius: 10 }} />
          <Text style={estilo.musictitle}>
            Matuê
          </Text>
        </View>

        <View style={estilo.marginL}>
          <Image source={require('../assets/slipknot.jpg')}
            style={{ width: 110, height: 110, borderRadius: 10}} />
          <Text style={estilo.musictitle}>
            Slipknot
          </Text>
        </View>

        <View style={estilo.marginL}> 
          <Image source={require('../assets/charlie.jpg')}
            style={{ width: 110, height: 110, borderRadius: 10}} />
          <Text style={estilo.musictitle}>
            Charlie Brown Jr.
          </Text>
        </View>

      </View>

      <View style={estilo.artistas}>

        <View>
          <Image source={require('../assets/korn.jpg')}
            style={{ width: 110, height: 110, borderRadius: 10 }} />
          <Text style={estilo.musictitle}>
            KoЯn
          </Text>
        </View>

        <View style={estilo.marginL}>
          <Image source={require('../assets/metallica.png')}
            style={{ width: 110, height: 110, borderRadius: 10}} />
          <Text style={estilo.musictitle}>
            Metallica
          </Text>
        </View>

        <View style={estilo.marginL}> 
          <Image source={require('../assets/luan.jpg')}
            style={{ width: 110, height: 110, borderRadius: 10}} />
          <Text style={estilo.musictitle}>
            Luan Santana
          </Text>
        </View>

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
    marginLeft: 15,
    marginTop: 15,
    fontSize: 25,
    fontWeight: 800,
  },
  artistas: {
    marginTop: 15,
    marginLeft: 10,
    flexDirection: 'row',
  },
  musictitle: {
    color: 'white',
    marginTop: 4

  },
  marginL: {
    marginLeft: 14.5
  }

});
