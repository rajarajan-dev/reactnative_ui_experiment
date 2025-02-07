import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: Colors.light.text,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
