import styled from "styled-components";


export const ContainerSignup = styled.div`
max-width: 100%;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #F4F5F6;

`
export const ModalBlock = styled.div`
position: absolute;
z-index: 2;
left: calc(50% - (366px/2));
top: calc(50% - (647px/2));
opacity: 1;
@media screen and (max-width: 768px) {
    left: calc(50% - (320px/2));
    top: 55px;
  }
`
export const ModalFormLogin = styled.div`
width: 366px;
height: 647px;
background-color: #FFFFFF;
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
padding: 43px 42px 47px;
@media screen and (max-width: 768px) {
    width: 320px;
    height: auto;
    border-radius: 0px;
    padding: 40px 20px;
  }
`
export const ModalBtnSignupEnt = styled.div`
width: 278px;
height: 62px;
background-color: #009EE4;
border-radius: 6px;
border: none;
margin-top: 30px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
&:hover {
    background-color: #0080C1;
  }
&:active {
    background-color: #0080C1;
  }
  @media screen and (max-width: 768px) {
    height: 46px;
    border: none;
    margin-top: 26px;
  }
`
