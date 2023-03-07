import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import s from "../barra/barra.module.css";

export function SearchBar() {
  const [valor, setValor] = useState("");
 
  const dispatch = useDispatch(); 

  const handleKeyPressed = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(getCountries(valor));
      setValor("");
    }
  };

  useEffect(() => {
    dispatch(getCountries(valor));
   
  }, [valor, dispatch])

  const handleChange = (e) => {
    e.preventDefault();
    setValor(e.target.value);
  };

  return (
    <div className={s.mainContainerSearcbar}>
      <input
        className={s.input}
        id="valor"
        onKeyDown={handleKeyPressed}
        placeholder="Enter a country name..."
        valor={valor}
        onChange={(e) => handleChange(e)}
      />
       <CiSearch className={s.SearchIcon}/>
    </div>
  );
}
