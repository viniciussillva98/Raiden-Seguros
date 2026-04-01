import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    padding: 90px 20px;
    background-color: #f9f9f9;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media screen and (max-width: 1030px) {
        flex-direction: column;
        height: auto;
    }

`;

export const Image = styled.img`
    height: 65%;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03); 
    }

        @media screen and (max-width: 1030px) {
        width: 100%;
        height: auto;
        }
`

export const SobreContent = styled.div`
    max-width: 600px;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;

`;

export const Title = styled.h1`
    z-index: 2; 
    font-size: 40px;
    font-weight: bold;
    color: #1fa62d;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

        @media screen and (max-width: 768px) {
          text-align: center;
        }
    `

export const Text = styled.p`
    color: #555;
    line-height: 1.6;
`