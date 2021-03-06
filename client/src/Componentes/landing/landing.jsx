import {NavLink} from 'react-router-dom'
import img from '../img/E7lwkX.jpg'
import s from './landing.module.css'

export function Landing(){
     return(
      <div className={s.container}> 
      <img className={s.img} src={img} alt="not found" />
     <NavLink className={s.boton} to='/home'>Let's explore</NavLink>
      <h1 className={s.title}>Countries of the World</h1>   
      </div>
     )
}