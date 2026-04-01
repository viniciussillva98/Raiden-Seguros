import styled from "styled-components";

export const Container = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1fa62d;

        @media screen and (max-width: 768px) {
            height: auto;
            padding: 20px 0;
    }
`

export const Title = styled.h1`
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    font-size: 39px;
    font-weight: 600;
    margin-bottom: 30px;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);// Ajusta o número de colunas com base no tamanho disponível
    gap: 20px;// Espaçamento entre os itens

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);// Em telas menores, exibe 2 colunas
    }

`
export const ItemFeature = styled.div`
    background-color: #fffffffa;
    padding: 15px 10px;
    border-radius: 10px;

        
    &:hover {
        img{
            transform: scale(1.08);
            transition: transform 0.3s ease;
        }
    }

`


export const Image = styled.img`
    width: 100%;
    height: auto;
    max-width: 120px;
    max-height: 60px;
    object-fit: contain;// Garante que a imagem seja redimensionada proporcionalmente sem distorção 
    margin: 0 auto;// Centraliza a imagem dentro do item


`