import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Foto from '../assets/images/terra.jpg';

export default function Index() {
  return (
    <ScrollView style={estilos.corpo} contentContainerStyle={estilos.container}>
      
      <Text style={estilos.titulo}>🌍 My First App</Text>

      <Image source={Foto} style={estilos.imagem} />

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>📌 Sobre o app</Text>
        <Text style={estilos.texto}>
          Primeiro aplicativo feito com React Native, desenvolvido pelo Senai — the best!
        </Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>🚀 O que aprenderei</Text>
        <Text style={estilos.item}>• Push notification</Text>
        <Text style={estilos.item}>• Acesso aos recursos nativos</Text>
        <Text style={estilos.item}>• Consumo de APIs externas</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>🛠️ O que vou precisar</Text>
        <Text style={estilos.item}>• Node.js</Text>
        <Text style={estilos.item}>• VS Code</Text>
        <Text style={estilos.item}>• Emulador ou celular</Text>
        <Text style={estilos.item}>• Ser um(a) bom(boa) aluno(a)</Text>
      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  corpo: {
    backgroundColor: '#f5f5f5'
  },

  container: {
    padding: 20,
    alignItems: 'center'
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9c305f',
    marginBottom: 20,
    textAlign: 'center'
  },

  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20
  },

  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,

    // sombra (Android + iOS)
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 }
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9c305f',
    marginBottom: 10
  },

  texto: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22
  },

  item: {
    fontSize: 15,
    color: '#444',
    marginBottom: 5
  }
});