import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/DoneTodo">Done Todo</NavLink> ||
      <NavLink to="/OpenTodo">Open Todo</NavLink>
    </>
  );
};
