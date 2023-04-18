import { NavLink } from "react-router-dom";
export const TodoCard = ({ title, description, isCompleted, id }) => {
  return (
    <>
      <h2 style={{ textDecoration: isCompleted ? `line-through` : null }}>
        {title}
      </h2>
      <p style={{ textDecoration: isCompleted ? `line-through` : null }}>
        {description}
      </p>
      <NavLink to={`/${id}`}>Expand Todo</NavLink>
    </>
  );
};
