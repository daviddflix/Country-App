import { NavLink } from "react-router-dom";
import s from "./landing.module.css";

export function Landing() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Countries of the World</h1>
      <NavLink className={s.btn} to="/home">
        Let's explore
      </NavLink>
    </div>
  );
}
