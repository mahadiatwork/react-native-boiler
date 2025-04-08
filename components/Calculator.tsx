import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/utils/Colors";
import Button from "./Button";

export default function Calculator() {
  const [firstValue, setFirstValue] = useState("");
  const [operator, setOperator] = useState("");
  const [displayValue, setDisplayValue] = useState("0");

  const handleNumberInput = (num: string) => {
    if (displayValue === "0") {
      setDisplayValue(num); // replace 0
    } else {
      setDisplayValue(displayValue + num); // append
    }
  };

  const handleOperation = (op: string) => {
    setFirstValue(displayValue);
    setOperator(op);
    setDisplayValue("0"); // reset for second number
  };

  const handleEqual = () => {
    if (!firstValue || !operator) return;

    const first = parseFloat(firstValue);
    const second = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
      case "+":
        result = first + second;
        break;
      case "-":
        result = first - second;
        break;
      case "*":
        result = first * second;
        break;
      case "/":
        result = second !== 0 ? first / second : 0;
        break;
      case "%":
        result = first % second;
        break;
      default:
        break;
    }

    setDisplayValue(result.toString());
    setFirstValue("");
    setOperator("");
  };

  const handleClear = () => {
    setFirstValue("");
    setOperator("");
    setDisplayValue("0");
  };

  const handleDelete = () => {
    if (displayValue.length === 1) {
      setDisplayValue("0");
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
      <Text style={{ fontSize: 30, fontWeight: "300", color: Colors.black }}>
          {firstValue + operator}
        </Text>
      <Text style={{ fontSize: 70, fontWeight: "300", color: Colors.black }}>
          {displayValue}
        </Text>
      </View>
      <View style={styles.keypad}>
        <Button title="C" type="top" onPress={handleClear} />
        <Button title="⌫" type="top" onPress={handleDelete} />
        <Button title="%" type="top" onPress={() => handleOperation("%")} />
        <Button title="/" type="right" onPress={() => handleOperation("/")} />

        <Button title="7" type="number" onPress={() => handleNumberInput("7")} />
        <Button title="8" type="number" onPress={() => handleNumberInput("8")} />
        <Button title="9" type="number" onPress={() => handleNumberInput("9")} />
        <Button title="x" type="right" onPress={() => handleOperation("*")} />

        <Button title="4" type="number" onPress={() => handleNumberInput("4")} />
        <Button title="5" type="number" onPress={() => handleNumberInput("5")} />
        <Button title="6" type="number" onPress={() => handleNumberInput("6")} />
        <Button title="-" type="right" onPress={() => handleOperation("-")} />

        <Button title="1" type="number" onPress={() => handleNumberInput("1")} />
        <Button title="2" type="number" onPress={() => handleNumberInput("2")} />
        <Button title="3" type="number" onPress={() => handleNumberInput("3")} />
        <Button title="+" type="right" onPress={() => handleOperation("+")} />

        <Button title="0" type="number" onPress={() => handleNumberInput("0")} />
        <Button title="00" type="number" onPress={() => handleNumberInput("00")} />
        <Button title="." type="number" onPress={() => handleNumberInput(".")} />
        <Button title="=" type="right" onPress={handleEqual} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  display: {
    flex: 1,
    backgroundColor: Colors.gray,
    paddingVertical: 20,
    paddingHorizontal: 40,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  keypad: {
    flex: 2,
    backgroundColor: Colors.light,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 30,
    padding: 20,
  },
});
