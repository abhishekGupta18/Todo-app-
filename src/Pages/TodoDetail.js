import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTaskContext } from "../Context/TaskContext";

export const TodoDetail = () => {
  const { task } = useTaskContext();
  const { todoId } = useParams();
  const findTodo = task.find((item) => item.id === Number(todoId));
  const { title, description, isCompleted, id } = findTodo;
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {isCompleted ? "Completed" : "Not Completed"}</p>
      <NavLink to="/">See All</NavLink>

    </>
  );
};
