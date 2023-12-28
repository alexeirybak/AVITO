import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;
export const ContainerEnter = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;
export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;
  @media screen and (max-width: 768px) {
    position: absolute;
    z-index: 2;
    left: calc(50% - (320px / 2));
    top: 55px;
    opacity: 1;
  }
`;
export const ModalFormLogin = styled.div`
  width: 366px;
  height: 439px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 47px 47px 40px;
  &:first-child {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 320px;
    height: auto;
    background-color: #ffffff;
    border-radius: 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }
`;
export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 44px;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 18px;
    margin-bottom: 30px;
    background-color: transparent;
  }
`;
export const ModalLogoImg = styled.img`
  width: 140px;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 120px;
    height: auto;
  }
`;
export const ModalInputLogin = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-bottom: 30px;
  outline: none;
  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border: 1px solid #d0cece;
    padding: 9px 17px;
    border-radius: 30px;
    &::-webkit-input-placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
    margin-bottom: 14px;
  }
`;

export const ModalInputLoginRepeatPass = styled(ModalInputLogin)`
  color: ${(props) => (props.$passEqual ? '#1bc61b' : 'red')};
`;

export const ModalInputPassword = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  outline: none;
  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border: 1px solid #d0cece;
    padding: 9px 17px;
    border-radius: 30px;
    &::-webkit-input-placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
  }
`;
export const ModalBtnEnter = styled.button`
  width: 278px;
  height: 52px;
  background-color: #009ee4;
  border-radius: 6px;
  margin-top: 60px;
  margin-bottom: 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background-color: #0080c1;
  }
  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: 768px) {
    height: 46px;
    margin-top: 40px;
    margin-bottom: 10px;
    border: none;
  }
`;

export const ModalBtnEnterLink = styled(Link)`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const ModalBtnSignup = styled.button`
  width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    background-color: #d9d9d9;
  }
  &:hover {
    background-color: #f4f5f6;
  }
  @media screen and (max-width: 768px) {
    height: 46px;
    border: 1px solid #d9d9d9;
    font-size: 16px;
    line-height: 24px;
  }
`;
export const ModalBtnSignupLink = styled(Link)`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: rgb(255, 128, 113);
  font-size: 0.75rem;
  font-weight: 400;
  position: absolute;
  top: 70px;
  left: 5px;
  text-align: center;
  margin-top: 10px;
`;

export const PassErrorMessage = styled(ErrorMessage)`
  font-size: 0.8rem;
  padding-right: 42px;
  padding-left: 42px;
  top: 130px;
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    padding-right: 22px;
    padding-left: 22px;
    top: 115px;
  }
`;