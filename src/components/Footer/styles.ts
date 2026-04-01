import styled from "styled-components";

export const ContainerFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65vh;
    background-color: #fffffffa;
    position: relative;

        @media screen and (max-width: 768px) {
            height: 80vh;
            padding: 0 10px;
            gap: 20px;
    }
`;
export const HeaderFooter = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1fa62d;
    position: absolute;
    top: 0;

        @media screen and (max-width: 768px) {
            height: 15%;
        }
`;
export const TerxtHeader = styled.p`
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
    font-size: 20px;
    
        @media screen and (max-width: 768px) {
            font-size: 16px;
            text-align: center;
            padding: 0 10px;
    }
`;
export const ContentFooter = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            gap: 20px;
            height: auto;
    }
`;
export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Image = styled.img`
    height: 65px;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

                    @media screen and (max-width: 768px) {
                        margin-top: 40px;
                 }
`;
export const TitleLeft = styled.h1`
    color: #1fa62d;
    margin-top: 10px;
    font-size: 24px;

            @media screen and (max-width: 768px) {
                font-size: 20px;
                margin-top: 20px;
                margin-bottom: 10px;  
            }
`;

export const TextLeft = styled.p`
    color: #333333;
    text-align: center;
    margin-top: 10px;
    font-size: 14px;

            @media screen and (max-width: 768px) {
                font-size: 12px;  
                margin-top: 10px;
                margin-bottom: 10px;  
            }
`;
export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;

                @media screen and (max-width: 768px) {
                    align-items: center;
                    text-align: center;
                 }
`;
export const TitleRight = styled.h1`
    color: #1fa62d;
    font-size: 23px;
`;
export const ContainerContato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export const TextContato = styled.p`
    color: #333333;
    font-size: 16px;

    span{
        font-weight: bold;
    }
    a{
        color: #333333;
        text-decoration: none;
        position: relative;
        transition: color 0.2s ease;
        text-decoration: none;

    &::after{
        content:"";
        position: absolute;
        height: 1px;
        width:  0px;
        background-color: #1ec72f;
        bottom: 1px;
        left: 0;
        transition: width 0.2s ease;
    }

        &:hover:after{
            width: 100%;
        }   
        &:hover {
            color: #1fa62d;
        }    
            
}
`;

export const FooterAll = styled.div`
    width: 70%;
    height: 20%;
    border-top: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333333;

                    @media screen and (max-width: 768px) {
                    align-items: center;
                    text-align: center;
                    margin-top: 20px;
                    width: 90%;
                 }
`;

export const TextFooter = styled.p`
    text-align: center;
    font-size: 14px;
    font-weight: normal;

    a{
         color: #333333;
         text-decoration: none;
         position: relative;

             &::after{
        content:"";
        position: absolute;
        height: 1px;
        width:  0px;
        background-color: #1ec72f;
        bottom: 1px;
        left: 0;
        transition: width 0.2s ease;
    }

        &:hover:after{
            width: 100%;
        }   
        &:hover {
            color: #1fa62d;
        }   
    }
`;
