import { useTaskContext } from "../Context/TaskContext";
import { TodoCard } from "./TodoCard";
export const DoneTodo = () => {
  const { task } = useTaskContext();

  return (
    <>
      <h1>This is Done todo page</h1>
      <h2 style={{ color: "green" }}>
        {" "}
        Total Done todo: {task.filter((item) => item.isCompleted).length}
      </h2>
      <hr />
      <ul>
        {task
          .filter((item) => item.isCompleted)
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
