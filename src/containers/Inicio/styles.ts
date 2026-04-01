import styled from "styled-components";
import banner from "../../assets/Desktop-Image.png";
import bannerMobile from "../../assets/Mobile-Image.png";


export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    background-image: url(${banner});
    background-size: cover;
    background-position: center;

    &::before {
        content: "";    
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6); /* Cor de sobreposição com opacidade */
        z-index: 1; /* Garante que a sobreposição fique acima da imagem */
    }

    @media screen and (max-width: 768px) {
        background-image: url(${bannerMobile});
        padding: 25px;
        background-size: initial;
  }

`;

export const Content = styled.div`
    z-index: 2; /* Garante que o conteúdo fique acima da sobreposição */
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #fffffffa;
    text-align: center;

            @media screen and (max-width: 768px) {
                gap: 60px;
        }
`
export const Title = styled.h1`
    z-index: 2; 
    font-size: 40px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

        @media screen and (max-width: 768px) {
            font-size: 28px;
        }
`
export const SubTitle = styled.p`
    z-index: 2; 
    font-size: 19px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

            @media screen and (max-width: 768px) {
                font-size: 16px;
        }
`

export const Button = styled.button`
    z-index: 2; 
    padding: 13px 21px;
    font-size: 16px;
    font-weight: bolder;
    border: none;
    border-radius: 3px;

    background-color: #1fa62d;
    color: #fffffffa;
    font-size: 19px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
        &:hover {
         background-color:  #1ec72f;
            transform: translateY(-1.5px);
        }
`