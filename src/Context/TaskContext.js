import { createContext, useContext, useEffect, useState } from "react";

import { fakeFetch } from "../FakeFetch";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/todos");
      if (response.status === 200) {
        setTask(response?.data?.todos);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const buttonHandler = (id) => {
    const updatedTask = [...task];
    const changedValue = updatedTask.find((item) => item.id === id);
    changedValue.isCompleted = !changedValue.isCompleted;
    setTask(updatedTask);
  };
  useEffect(() => {
    getData();
  }, []);
  //   console.log(task);
  return (
    <TaskContext.Provider value={{ task, buttonHandler }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
