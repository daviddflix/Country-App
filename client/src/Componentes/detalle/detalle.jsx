import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import { Nav } from "../barra/barra";
import Spinner from "../Spinner/spinner";
import s from "./detalle.module.css";
export function Detalle() {
  const { idPais } = useParams();
  const dispatch = useDispatch();
  const detalle = useSelector((state) => state.detalle);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getDetail(idPais));
  }, [dispatch, idPais]);

  return (
    <div className={s.mainContainer}>
      <Nav />
      {isLoading ? (
        <div className={s.container}>
          <div className={s.subContainer}>
            <h2 className={s.detailnTitle}>
              Country<p>{detalle.name}</p>
            </h2>
            <img src={detalle.flags} className={s.flag} alt="flag" />
            <h2 className={s.detailnTitle}>
              Capital<p>{detalle.capital}</p> 
            </h2>
            <h2 className={s.detailnTitle}>
              Continent <p>{detalle.continente}</p>
            </h2>
            <h2 className={s.detailnTitle}>
              Population <p>{nFormatter(detalle.population)}</p>
            </h2>
            <h2 className={s.detailnTitle}>
              Area <p>{nFormatterArea(detalle.area)}</p>
            </h2>
            <h2 className={s.detailnTitle}>
              Subregion <p>{detalle.subregion}</p>
            </h2>
          </div>

          <div className={s.subContainer}>
            <h2 className={s.titleActivity}>Activities</h2>
            <h2 className={s.h2}>
              {detalle.activities.length === 0 ? (
                <h5 className={s.noActs}>No Activities created yet</h5>
              ) : (
                detalle.activities.map((el) => {
                  return (
                    <div className={s.container_activity} key={el.id}>
                      <h4 className={s.activities}>
                        Activity: <p>{el.nombre}</p>
                      </h4>
                      <h4 className={s.activities}>
                        Difficulty: <p>{el.dificultad} </p>
                      </h4>
                      <h4 className={s.activities}>
                        Duration: <p>{el.duracion} hs</p>
                      </h4>
                      <h4 className={s.activities}>
                        Season: <p>{el.temporada}</p>
                      </h4>
                    </div>
                  );
                })
              )}
            </h2>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

function nFormatter(num) {
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(1).replace(/\.0$/, "")} G`;
  }
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1).replace(/\.0$/, "")} Million hab`;
  }
  if (num >= 1000) {
    return `${num / 1000} hab`;
  }
  return num;
}

function nFormatterArea(num) {
  if (num <= 999) {
    return `${num} Km2`;
  }
  if (num >= 1000 && num <= 1000000) {
    return `${num / 1000} Km2`;
  }
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(4)} Km2`;
  }

  return num;
}
