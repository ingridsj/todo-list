import { useState } from "react";

import {
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Label } from "../../components/Label";
import { Empty } from "../../components/Empty";
import { Task } from "../../components/Task";

import { styles } from "./styles";

import logo from "../../assets/logo.png";
import plus from "../../assets/plus.png";

type Task = {
  id: number;
  text: string;
  isComplete: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskValue, setNewTaskValue] = useState("");

  function handleCreateTask() {
    if (!newTaskValue.length) {
      return Alert.alert("Ops!", "Insira uma nova tarefa");
    }

    setTasks((prevState) => {
      return [
        ...prevState,
        {
          id: Date.now(),
          text: newTaskValue,
          isComplete: false,
        },
      ];
    });

    setNewTaskValue("");
  }

  function handleCompleteTask(id: number) {
    setTasks((prevState) =>
      prevState.map((prev) =>
        prev.id === id ? { ...prev, isComplete: !prev.isComplete } : { ...prev }
      )
    );
  }

  function handleRemoveTask(id: number) {
    Alert.alert("Remover", "Tem certeza que deseja remover a tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((prev) => prev.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const completedTasks = tasks.filter((task) => task.isComplete);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={newTaskValue}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setNewTaskValue}
        />
        <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
          <Image source={plus} />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <Label title="Criadas" color="#4EA8DE" quantity={tasks.length} />
        <Label
          title="Concluídas"
          color="#8284FA"
          quantity={completedTasks.length}
        />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => item.text + index.toString()}
        ListEmptyComponent={<Empty />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => {
          return (
            <View style={styles.taskContainer}>
              <Task
                isComplete={item.isComplete}
                text={item.text}
                handleCompleteTask={() => handleCompleteTask(item.id)}
                handleRemoveTask={() => handleRemoveTask(item.id)}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
