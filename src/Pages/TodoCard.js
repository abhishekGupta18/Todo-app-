import { NavLink } from "react-router-dom";
export const TodoCard = ({ title, description, isCompleted, id }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {isCompleted ? "Completed" : "Not Completed"}</p>
      <NavLink to={`/${id}`}>Expand Todo</NavLink>
      {/* <button>Mark As Done</button> */}
    </>
  );
};
