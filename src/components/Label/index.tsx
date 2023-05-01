import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type LabelProps = {
  title: string;
  color: string;
  quantity: number;
};

export function Label({ title, quantity, color }: LabelProps) {
  const style = styles({ color });

  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <View style={style.quantityWrapper}>
        <Text style={style.quantity}>{quantity}</Text>
      </View>
    </View>
  );
}
