import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [tasksItems, setTasksItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTasksItems([...tasksItems, task]);
    setTask("");
  };

  const completeTask = (index) => {
    let itemsCopy = [...tasksItems];
    itemsCopy.splice(index, 1);
    setTasksItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Todays tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* Thi is where the task will go! */}
          {tasksItems.map((item, index) => (
            <TouchableOpacity onPress={() => completeTask()}>
              <Task text={item} key={index} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5f9daf42",
  },

  taskWrapper: {
    paddingTop: 80,
    padding: 30,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  items: {
    marginTop: 30,
  },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
