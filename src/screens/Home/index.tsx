import { View, Image } from "react-native";

import { styles } from "./styles";

import logo from "../../assets/logo.png";

export function Home() {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo}/>
    </View>
  );
}
