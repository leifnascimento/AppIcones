import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <FontAwesome.Button
        backgroundColor="#00FF00"
        name="android"
        size={32}
        color="#0000ff"
        onPress={() => console.log("fb pressed")}
      />
      <EvilIcons name="calendar" size={32} color="#ff0000" />
      <Ionicons.Button
        name="airplane-sharp"
        size={64}
        onPress={() => console.log("plane pressed")}
      >
        Book a flight
      </Ionicons.Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    margin: 8,
  },
});
