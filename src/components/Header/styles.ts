
import styled from "styled-components";

export const Container = styled.div`
padding: 17px 10%;
position: fixed;
top: 0;
left: 0;
width: 100%;
background-color: #fffffffa;
z-index: 1000;

display: flex;
justify-content: space-between;
border-bottom: 3px solid #1fa62d;

img {
    height: 45px;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
}


`


export const Buttons = styled.button`
border: none;
background: transparent;
font-size: 17px;
font-weight: bolder;
cursor: pointer;
padding: 0px 10px;
color: #333333;
position: relative;
transition: color 0.3s ease;

&::after{
    content:"";
    position: absolute;
    height: 2.5px;
    width:  0px;
    background-color: #1ec72f;
    bottom: 5px;
    left: 0;
    transition: width 0.2s ease;
}

&:hover::after{
    width: 100%;
}
&:hover {
    color: #1fa62d;
}
`
export const Nav = styled.nav`
display: flex;
gap: 30px;

@media screen and (max-width: 1030px) {
    display: none;
}
`

export const IconButton = styled.button`
  border: none;
  background: transparent;
  color: #1fa62d;
  cursor: pointer;

@media screen and (min-width: 1030px) {
    display: none;
}
`

export const Ul = styled.ul`
@media screen and (min-width: 1030px) {
    display: none;
}
        display: flex;
        flex-direction: column;
        background: #fff;
        position: absolute;
        top: 70px;
        right: 20px;
        left: 20px;
        padding: 20px;
        border: 2px solid #1fa62d;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        gap: 15px;

                @media screen and (min-width: 760px) {
                           position: absolute;
                            top: 70px;
                            right: 20px;
                            left: auto;
                            width: 200px;
                }
li {
    list-style: none;
    font-size: 16px;
    font-weight: 800;
    color: #333;    
    padding: 10px 10px;
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease;
    gap: 15px;

    &::after{
    content:"";
    position: absolute;
    height: 2.5px;
    width:  0px;
    background-color: #1ec72f;
    bottom: 5px;
    left: 0;
    transition: width 0.2s ease;
}

&:hover::after{
    width: 100%;
}
&:hover {
    color: #1fa62d;
}



}


`