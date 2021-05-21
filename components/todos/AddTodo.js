import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(addTodo(value));
    setValue("");
  };
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="entrez le nom du todo"
      />
      <Button title="Add todo" onPress={handlePress} />
    </View>
  );
};

export default AddTodo;
