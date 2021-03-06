import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { filterAz, getAll } from "../../redux/actions"
import {NavLink} from 'react-router-dom'
import s from './home.module.css'
import { Nav } from "../barra/barra"
import { Paginado } from "../paginado/paginado"
import { Filtros } from "../filtros/Filtros"
import Spinner from '../Spinner/spinner.js'



export default function Home(){
    const paises = useSelector(state => state.paises)
    const notFound = useSelector(state => state.notFound)
  
   const dispatch = useDispatch()

  
   
     let [, setOrder] = useState('')
     let [currentPage, setcurrentPage] = useState(1);
     let [countriesPerPage] = useState(8);
    
    
     const indexOfLastCountry = currentPage * countriesPerPage; // i10
     const indexOfFirstCountry = indexOfLastCountry - countriesPerPage // 10 - 10 = 0 
     const currentCountries = paises.slice(indexOfFirstCountry, indexOfLastCountry)
                     
     const paginado = (pageNumber) => {
       setcurrentPage(pageNumber)
     }


     


const handleAz = (e)=> {
  e.preventDefault();
  dispatch(filterAz(e.target.value));
  setcurrentPage(1)
  setOrder(`${e.target.value}`);

}



useEffect(()=>{
  if(!paises.length && notFound === false){
    dispatch(getAll())
  }
})



     return(
      <div className={s.mainContainer}>
      <Nav/>
     <Filtros handleAz={handleAz}/>
      <Paginado currentPage={currentPage} paginado={paginado} countriesPerPage={countriesPerPage} countries={paises.length} />
     
      {
        notFound && <h2 className= {s.notfound}>Sorry Country Not Found</h2>
      }
    <div className={s.containerFlags}>
 
      {
        currentCountries.length?
        currentCountries.map(el => {
          return(
            <div key={el.cca3} className={s.container}>
          <NavLink className={s.title} to={`/detalle/${el.id}`}>
            <h1>{el.name}</h1>
            <img className={s.imagen} src={el.flags} alt="Not Found" />
            <h1>{el.continente}</h1>
            </NavLink> 
          </div>
          )
        
        }): <Spinner/>
      }
     </div>


      </div>
     )
}