import { Text, View, SafeAreaView, FlatList, StyleSheet, Image } from "react-native";
import Header from './components/header'
import tarefas from './dados/tarefas';

export default function Index() {
  return (
    <View>
      <Header titulo=' SESI Produtividade '/>
    </View>
  );
}