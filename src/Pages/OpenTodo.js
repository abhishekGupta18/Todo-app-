import { useTaskContext } from "../Context/TaskContext";
import { TodoCard } from "./TodoCard";
export const OpenTodo = () => {
  const { task } = useTaskContext();
  return (
    <>
      <h1>This is Open todo page</h1>
      <h2 style={{ color: "red" }}>
        {" "}
        Total Open todo: {task.filter((item) => !item.isCompleted).length}
      </h2>
      <hr />
      <ul>
        {task
          .filter((item) => !item.isCompleted)
          .map((item) => (
            <>
              <p>
                <strong>Title - </strong>
                {item.title}
              </p>
              <p>
                <strong>Description - </strong>
                {item.description}
              </p>
              <p>
                <strong>Status:</strong>
                {item.isCompleted ? "Completed" : "Not Completed"}
              </p>
              <hr />
            </>
          ))}
      </ul>
    </>
  );
};
