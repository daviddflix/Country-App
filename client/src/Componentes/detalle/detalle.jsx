import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetail } from "../../redux/actions"
import { Nav } from "../barra/barra"
import  s from './detalle.module.css'
export function Detalle(){
    const {idPais} = useParams()
    const dispatch = useDispatch()
    const detalle = useSelector(state => state.detalle)
   
    useEffect(()=> {
          dispatch(getDetail(idPais))
    }, [dispatch, idPais])
 
    return(
        <div className={s.main_container}>
          <Nav/>
       {
           <div className={s.container}>
          <h2>Country: <p>{detalle.name}</p></h2>
           <img src={detalle.flags} alt="" />
           <h2>Capital: <p>{detalle.capital}</p></h2>
           <h2>Continent: <p>{detalle.continente}</p></h2>
           <h2>Population: <p>{nFormatter(detalle.population)}</p></h2>
           <h2>Area: <p>{nFormatterArea(detalle.area)}</p></h2>
           
           <h2>Subregion: <p>{detalle.subregion}</p></h2>
           <h2 className={s.title_activity}>Activities: { detalle.activities?  detalle.activities.map(el=> {
              return(
                 <div className={s.container_activity} key={el.id}>  
            <h2 className={s.activities}>Activity: <p>{el.nombre}</p></h2> 
              <h2 className={s.activities}>Difficulty: <p>{el.dificultad} </p></h2>
             <h2 className={s.activities}>Duration:  <p>{el.duracion} hs</p></h2>
              <h2 className={s.activities}>Season: <p>{el.temporada}</p></h2>  
                 </div>
              )
           }) : <p>No Act</p> }
          </h2>
           
           
          </div>
       }

      </div>
     )
}


function nFormatter(num) {
    if (num >= 1000000000) {
       return `${(num / 1000000000).toFixed(1).replace(/\.0$/, '')} G`;
    }
    if (num >= 1000000) {
       return `${(num / 1000000).toFixed(1).replace(/\.0$/, '')} Million hab`;
    }
    if (num >= 1000) {
       return `${num / 1000} hab`
    }
    return num;
  }

  
function nFormatterArea(num) {
    if (num<=999) {
       return `${num} Km2`;
    }
    if (num >= 1000 && num <= 1000000) {
        return  `${num/1000} Km2`;
     }
     if (num >= 1000000) {
        return `${(num/1000000).toFixed(4)} Km2` ;
     }
   
    
  
    return num;
  }