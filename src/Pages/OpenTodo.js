import { useTaskContext } from "../Context/TaskContext";
import { TodoCard } from "./TodoCard";
export const OpenTodo = () => {
  const { task } = useTaskContext();
  return (
    <>
      <h1>This is Open todo page</h1>
      <h2>
        {" "}
        Total Open todo: {task.filter((item) => !item.isCompleted).length}
      </h2>
      <ul>
        {task
          .filter((item) => !item.isCompleted)
          .map((item) => (
            <TodoCard {...item} />
          ))}
      </ul>
    </>
  );
};
