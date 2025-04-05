import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Perfil() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Dados do Usuário
      </Text>
      <View style={estilo.imgPerfil}>
      <MaterialCommunityIcons name="account" color={'white'} size={200} />
      </View>
      <View style={estilo.infoContainer}>
        <Text style={estilo.subtitle}>
          Nome:
        </Text>
        <View style={estilo.infoBox}>
          <Text style={estilo.subtitle}>
            Arthur Argeri
          </Text>
        </View>
      </View>

      <View style={estilo.infoContainer}>
        <Text style={estilo.subtitle}>
          E-mail:
        </Text>
        <View style={estilo.infoBox}>
          <Text style={estilo.subtitle}>
            emailLegal@gmail.com
          </Text>
        </View>
      </View>

      <View style={estilo.infoContainer}>
        <Text style={estilo.subtitle}>
          Telefone:
        </Text>
        <View style={estilo.infoBox}>
          <Text style={estilo.subtitle}>
            11 99999-9999
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
  },
  subtitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: 800,
  },
  imgPerfil: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 20,
  },
  infoBox: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    width: '70%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    alignSelf: 'center',
  },
});
