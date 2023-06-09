import { NavLink } from "react-router-dom";

import { useTaskContext } from "../Context/TaskContext";
import { TodoCard } from "./TodoCard";
export const Home = () => {
  const { task, buttonHandler } = useTaskContext();
  return (
    <>
      <h1>Home</h1>
      <hr />
      <ul>
        {task.map((item) => (
          <>
            <TodoCard {...item} />
            <br></br>
            <button onClick={() => buttonHandler(item.id)}>
              {" "}
              Mark As {item.isCompleted ? "Undone" : "Done"}
            </button>
            <hr />
          </>
        ))}
      </ul>
    </>
  );
};
