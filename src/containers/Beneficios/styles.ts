import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    padding: 90px 12%;
    background-color: #f9f9f9;

    @media screen and (max-width: 768px) {
     height: auto;
     padding: 50px 5%;
}
        @media screen and (max-width: 1030px) {
            padding: 0px 5%;
            display: flex;
            flex-direction: column;
            justify-content: center;
    }
`;

export const Title = styled.h2`
margin-top: 10px;
font-size: 40px;
font-weight: 500;
text-align: center;
color: #1fa62d;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

@media (max-width: 768px) {
    font-size: 30px;
}
`

export const Sectionfeatures = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr); // 3 colunas de largura igual
gap: 20px;
margin-top: 20px;

    @media screen and (max-width: 1030px) {
        grid-template-columns: repeat(2, 1fr); // 1 coluna para telas menores
        margin-top: 50px;
    }

    @media screen and (max-width: 768px) {
     grid-template-columns: 1fr; // 1 coluna para telas menores
    }



`
export const Cardfeatures = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
border-radius: 10px;
padding: 10px 40px;
background-color: #fffffffa;
border: 2px solid #1fa62d;


h3{
    color: #1fa62d;
    transition: transform 0.5s ease;
    margin-bottom: 10px;
}
h4{
    color: #1fa62d;
    font-size: 20px;
    font-weight: 500;
}
p{
    color:  #666;
    font-weight: 400;
    text-align: center;   
    font-size: 16px;
}

&:hover {
    
    h3{
        transform: scale(1.3);
    };  
}

`