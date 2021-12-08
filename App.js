import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* Thi is where the task will go! */}
          <Task text={"task 1"} />
          <Task text={"task 1"} />
        </View>
      </View>
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
  items: {},
});
