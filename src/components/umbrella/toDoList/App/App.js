import React        from "react";
import ToDoList     from '../Components/ToDoList/ToDoList';
import { Provider } from "react-redux";
import {store}      from '../Store/Store';



function ToDoListApp() {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}

export default ToDoListApp;
