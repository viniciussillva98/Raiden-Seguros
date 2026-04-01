import styled from "styled-components";


export const LinkWhats = styled.a`
position: fixed;
bottom: 20px;
right: 20px;
background-color: transparent;
z-index: 1000;
`

export const Image = styled.img`
width: 50px;    
height: 50px;
border-radius: 50%;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
transition: transform 0.2s ease-in-out; 
&:hover {
    transform: scale(1.1);
}
`   