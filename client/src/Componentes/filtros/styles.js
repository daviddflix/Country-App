import styled from 'styled-components'


export const MainContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 600px) {
    
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 1rem;
        padding: 0;
        background-color:dimgray;
        z-index: 2;
        position: relative;
        left: ${({open}) => open? "none" : "0"} ;

    }
    
    
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
`;
