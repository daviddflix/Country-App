const axios = require('axios').default;

export const GET_COUNTRY = 'GET_COUNTRY'
export const GET_DETAILS = 'GET_DETAILS'
export const  GET_All = ' GET_All'
export const FILTER_ACT = 'FILTER_ACT'
export const FILTER_CONTINENT = 'FILTER_CONTINENT'
export const FILTER_POPULATION = 'FILTER_POPULATION'
export const FILTERAZ = 'FILTERAZ'
export const GET_ACTS = 'GET_ACTS'


export function getCountries (title){

    if(title){
       return async function (dispatch){
          try {                             // https://countriesa-d.herokuapp.com/countries?name=${title}
               const res = await axios.get(`https://countriesa-d.herokuapp.com/countries?name=${title}`); 
               console.log(res)
                   return dispatch({ type: GET_COUNTRY, payload: res.data });
           } catch (err) {
               return console.log(err);
           }
               
       } 
    }
    
 }

 export function getDetail(idPais){
    return async function (dispatch){
       const data = await fetch(`https://countriesa-d.herokuapp.com/countries/${idPais}`)
       const info = await data.json()
       return dispatch({ type: GET_DETAILS, payload: info })
    }        
 }

 export function getAll (){
  return async function (dispatch){
         try {                          //https://countriesa-d.herokuapp.com/countries
              const res = await axios.get(`https://countriesa-d.herokuapp.com/countries`);
              return dispatch({ type: GET_All, payload: res.data });
          } catch (err) {
              return console.error(err);
          }
              
      } 
   
   
} 

 

 export function postAcitvity  (payload){
 return function  (dispatch){
    try {                       // https://countriesa-d.herokuapp.com/activity
        const res =   axios.post("https://countriesa-d.herokuapp.com/activity", payload);
         return res
    } catch (err) {
        return console.error(err);
    }
 }
    
 } 

 export function  getActs(){
    return async function(dispatch){
       try {                            //https://countriesa-d.herokuapp.com/activities
           const res = await axios.get("https://countriesa-d.herokuapp.com/activities")
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



