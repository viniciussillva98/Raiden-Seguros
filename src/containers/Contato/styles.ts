import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    padding: 90px 20px;
    background-color: #f9f9f9;

    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    z-index: 2; 
    font-size: 37px;
    font-weight: bold;
    color: #1fa62d;
    `

export const SubTitle = styled.p`
font-size: 15px;
color: #333;
margin-top: 20px;
`

export const ContentForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 500px;
gap: 15px;
margin-top: 15px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Input = styled.input`
    width: 100%;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 8px;

    &:focus {
        outline: none;
        border-color: #1fa62d;
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 8px;
    resize: vertical;

        &:focus {
        outline: none;
        border-color: #1fa62d;
    }
`

export const Button = styled.button`
    width: 100%;
    padding: 15px;
    background-color: #1fa62d;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`