import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterActivity,
  filterByContinent,
  filterByPopulation,
  getActs,
} from "../../redux/actions";
import FilterContext from "../Context/filterContext";
import m from "./Filtros.module.css";

export function Filtros({ handleAz }) {
  const dispatch = useDispatch();

  let acts = useSelector((state) => state.acts);

  var hash = {};
  acts = acts.filter(function (current) {
    var exists = !hash[current.nombre];
    hash[current.nombre] = true;
    return exists;
  });

  const { filter } = useContext(FilterContext);

  useEffect(() => {
    dispatch(getActs());
  }, [dispatch]);

  const handleContinent = (e) => {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value));
  };

  const handlePopulation = (e) => {
    e.preventDefault();
    dispatch(filterByPopulation(e.target.value));
  };

  const handleActivity = (e) => {
    e.preventDefault();
    dispatch(filterActivity(e.target.value));
  };

  return (
    <div>
    
      <div className={filter ? m.main_container_no : m.main_container}>
        <div className={m.container}>
          <select className={m.selection} onChange={handleAz}>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
        </div>

        <div className={m.container}>
          <select className={m.selection} onChange={handleActivity}>
            <option value="All">All Activities</option>
            {acts?.map((el) => {
              return (
                <option value={el.nombre} key={el.nombre}>
                  {el.nombre}
                </option>
              );
            })}
          </select>
        </div>
        <div className={m.container}>
          <select className={m.selection} onChange={handleContinent}>
            <option value="All">All Countries</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="South America">South America</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className={m.container}>
          <select className={m.selection} onChange={handlePopulation}>
            <option value="All">All</option>
            <option value="1000000">1 - 1 millon</option>
            <option value="1000001">1 millon - 50 millon</option>
            <option value="50000000">50 millon - 400 millon</option>
            <option value="1000000000">400 millon or more</option>
          </select>
        </div>
      </div>
    </div>
  );
}
