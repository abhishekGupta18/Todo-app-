import { useTaskContext } from "../Context/TaskContext";
import { TodoCard } from "./TodoCard";
export const DoneTodo = () => {
  const { task } = useTaskContext();

  return (
    <>
      <h1>This is Done todo page</h1>
      <h2>
        {" "}
        Total Done todo: {task.filter((item) => item.isCompleted).length}
      </h2>
      <ul>
        {task
          .filter((item) => item.isCompleted)
          .map((item) => (
            <TodoCard {...item} />
          ))}
      </ul>
    </>
  );
};
