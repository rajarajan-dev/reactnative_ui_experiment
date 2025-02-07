import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./index.style";
import RNPickerSelect from "react-native-picker-select";

function index() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const pickerRef = useRef<any>(null); // 🔹 Create a ref for the picker
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a language:</Text>
      <RNPickerSelect
        value={selectedLanguage}
        onValueChange={(value) => setSelectedLanguage(value)}
        useNativeAndroidPickerStyle={false}
        style={{
          inputIOS: {
            padding: 12,
            borderRadius: 4,
            pointerEvents: "none",
            backgroundColor: "white",
          },
        }}
        placeholder={{
          label: "Select a Reason...",
          value: null,
          color: "grey",
        }}
        items={[
          {
            label: "Football",
            value:
              "football is a game, ball should not touch with hand, player use foot to touch and pass the balls. they can use head and shoulder to stop the ball.",
          },
          {
            label: "Baseball",
            value:
              "baseball is a game, ball should be handled with hands, but you should tap the ball with ground, not allowed to hold with hands.",
          },
          {
            label: "Hockey",
            value:
              "hockey is a game, balls should not be touched with neither hands nor foot, use jocky stick to touch and pass the ball.",
          },
        ]}
      >
        {selectedLanguage && (
          <Text
            style={{
              padding: 12,
              borderRadius: 4,
              pointerEvents: "none",
              backgroundColor: "white",
            }}
          >
            {"what is selected" + selectedLanguage}
          </Text>
        )}
      </RNPickerSelect>

      <Text style={styles.result}>You selected: {selectedLanguage}</Text>
    </View>
  );
}
export default index;
