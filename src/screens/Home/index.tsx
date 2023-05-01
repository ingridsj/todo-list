import { View, Image, TextInput, TouchableOpacity } from "react-native";

import { Label } from "../../components/Label";

import { styles } from "./styles";

import logo from "../../assets/logo.png";
import plus from "../../assets/plus.png";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.button}>
          <Image source={plus} />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <Label title="Criadas" color="#4EA8DE" quantity={0} />
        <Label title="Concluídas" color="#8284FA" quantity={2} />
      </View>
    </View>
  );
}
