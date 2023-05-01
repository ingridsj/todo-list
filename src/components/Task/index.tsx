import { View, Text, TouchableOpacity, Image } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import trash from '../../assets/trash.png'

import { styles } from "./styles";

type TaskProps = {
  text: string;
  isComplete: boolean;
  handleCompleteTask: () => void;
  handleRemoveTask: () => void;
};

export function Task({
  text,
  isComplete,
  handleCompleteTask,
  handleRemoveTask,
}: TaskProps) {
  const style = styles({ isComplete });

  return (
    <View style={style.container}>
      <BouncyCheckbox
        size={25}
        fillColor="#5E60CE"
        innerIconStyle={{
          borderWidth: 2,
          borderColor: isComplete ? "#5E60CE" : "#4EA8DE",
        }}
        onPress={handleCompleteTask}
      />
      <View style={style.content}>
        <Text style={style.text} numberOfLines={2} ellipsizeMode="tail">
          {text}
        </Text>
        <TouchableOpacity style={style.button} onPress={handleRemoveTask}>
          <Image source={trash}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
