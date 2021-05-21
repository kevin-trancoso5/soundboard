import React from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { todosSelector } from "./todosSlice";

const TodoList = () => {
  const todos = useSelector(todosSelector);
  return (
    <View>
      <FlatList
        renderItem={({ item }) => <TodoItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        data={todos}
      />
    </View>
  );
};

export default TodoList;
