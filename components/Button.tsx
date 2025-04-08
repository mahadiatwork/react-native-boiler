import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/utils/Colors";

interface ButtonProps {
  title: string;
  type: "top" | "right" | "number";
  onPress: () => void; // <<< add this
}

const Button = ({ title, type, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress} // <<< connect it here
      style={[
        styles.button,
        {
          backgroundColor:
            type === "top"
              ? Colors.btnDark
              : type === "right"
              ? Colors.btnRight
              : Colors.btnLight,
        },
      ]}
    >
      <Text style={{ fontSize: 34, color: type === "number" ? Colors.black : Colors.white }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.dark,
  },
});
