const axios = require('axios').default;

export const GET_COUNTRY = 'GET_COUNTRY'
export const GET_DETAILS = 'GET_DETAILS'
export const  GET_All = ' GET_All'
export const FILTER_ACT = 'FILTER_ACT'
export const FILTER_CONTINENT = 'FILTER_CONTINENT'
export const FILTER_POPULATION = 'FILTER_POPULATION'
export const FILTERAZ = 'FILTERAZ'
export const GET_ACTS = 'GET_ACTS'
export const NOT_FOUND = 'NOT_FOUND'

const url = 'https://countries.up.railway.app';


export function getCountries (title){
    

    if(title){
       return async function (dispatch){
          try {                            
               const res = await axios.get(`${url}/countries?name=${title}`); 
              
               if(res.data.status === 404){
                 dispatch({ type: NOT_FOUND, payload: true });
               } else {
                 dispatch({ type: GET_COUNTRY, payload: res.data });
               }
           } catch (err) {
                dispatch({ type: NOT_FOUND, payload: true });
           }
               
       } 
    }
    
 }

 export function getDetail(idPais){
    return async function (dispatch){  
       const data = await fetch(`${url}/countries/${idPais}`)
       const info = await data.json()
       return dispatch({ type: GET_DETAILS, payload: info })
    }        
 }

 export function getAll (){
  return async function (dispatch){
         try {                         
              const res = await axios.get(`${url}/countries`);
              return dispatch({ type: GET_All, payload: res.data });
          } catch (err) {
              return console.error(err);
          }
              
      } 
   
   
} 

 

 export function postAcitvity  (payload){
 return function  (dispatch){
    try {                       
        const res =   axios.post(`${url}/activity`, payload);
         return res
    } catch (err) {
        return console.error(err);
    }
 }
    
 } 

 export function  getActs(){
    return async function(dispatch){
       try {                            
           const res = await axios.get(`${url}/activities`)
           return dispatch({ type: GET_ACTS, payload: res.data })
       } catch (error) {
           console.log(error)
       }
    }
}





 export function filterByContinent(value){
     return{
         type:FILTER_CONTINENT,
         payload: value
     }
 }
 
 export function filterByPopulation(value){
     return{
       type: FILTER_POPULATION,
       payload: value
     }
 }

 export function filterAz(value){
     return{
         type: FILTERAZ,
         payload: value
     }
       
 }

 export function filterActivity(value){
    return{
        type: FILTER_ACT,
        payload: value
    }

}



