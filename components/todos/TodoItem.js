import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { removeTodo, toogleTodo } from "./todosSlice";

const TodoItem = ({ name, completed, id }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeTodo(id));
  };

  const toogle = () => {
    dispatch(toogleTodo(id));
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        backgroundColor: completed ? "green" : "tomato",
      }}
    >
      <Text>
        {name}: c'est fait ? {completed ? "oui" : "non"}
      </Text>
      <Button title="X" onPress={remove} />
      <Button title="toogle" onPress={toogle} />
    </View>
  );
};

export default TodoItem;
