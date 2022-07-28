import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchBar
        placeholder="Search here"
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />
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
});
