import { useSelector } from "react-redux";
import s from "./spinner.module.css";

export default function Spinner() {
  const notFound = useSelector((state) => state.notFound);

  return (
    <div className={s.container}>
      <h1>
        {notFound === false && (
          <div className={s.ldsRoller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </h1>
    </div>
  );
}
