import styled from 'styled-components'
import { BiWorld} from 'react-icons/bi'
import { NavLink } from "react-router-dom";
import { FaList} from 'react-icons/fa'

export const  MainContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: darkslategrey;
   
    
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  display: inline-flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
 

`;

export const LinkLogo = styled(NavLink)`
    
   
    @media screen and (max-width: 600px) {
       display: block;
       position: relative;
       left: 1rem;
}
`;

export const Logo = styled(BiWorld)`
      
    width: 30px;
    height: 30px;
    
`;

export const Menu = styled.ul`

display: flex;
list-style: none;

   @media screen and (max-width: 600px){
       position: absolute;
       top: 89px;
       z-index: 1;
       left: ${({open}) => open? "0" : "40rem"} ;
       transition: 0.5s all ease;
       width: 100%;
   }
`;


export const ContainerRutas = styled.li`
  
 

  @media screen and (max-width:600px){
        background-color: black;
        color: white;
        flex-direction: column;
        transition: 0.5s all ease;
    }
`;

export const Link = styled(NavLink)`
    
    transition: 0.5s all ease;
    color: black;
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
    height: 100%;
    padding: 20px;
  
    &:hover{
        transition: 0.5s all ease;
        background-color: #29bf12;
        color: black;
    }

    @media screen and (max-width:600px){
        background-color: black;
        color: white;
        height: 90vh;
       
    }


`;

export const Buscador = styled.div`
  position: relative;
  left: 1rem ;
`;


export  const MobileIcon = styled(FaList)`

    display: none;
    width: 20px;
    height: 20px;
    z-index: 2;


    @media screen and (max-width: 600px) {
        display: block;
        position: relative;
        right: 1rem;
}

@media screen and (max-width: 450px) {
        display: block;
        position: relative;
        right: .5rem;
}

&:active{
        background-color: black;
        color: #fff;
        border-radius: 5px;
    }
`;


export const FilterIcon = styled.div`
    display: none;

    @media screen and (max-width: 600px) {
        display: inline;
        position: relative;
        right: 8.8rem;
        bottom: 2.8rem
}

&:active{
       
        background-color: black;
        color: #fff;
        border-radius: 5px;
        
    }
 
`;