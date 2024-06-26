import styled from 'styled-components';

export const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Loader = styled.div`
    width: 16px;
    height: 16px;
    position: relative;
    left: -32px;
    border-radius: 50%;
    color: #00C1FF;
    background: currentColor;
    box-shadow: 32px 0 , -32px 0 ,  64px 0;

  &:after {
    content: '';
    position: absolute;
    left: -32px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    background:#99D100;
    animation: move 3s linear infinite alternate;
  }

  @keyframes move {
    0% , 5%{
      left: -32px;
      width: 16px;
    }
    15% , 20%{
      left: -32px;
      width: 48px;
    }
    30% , 35%{
      left: 0px;
      width: 16px;
    }
    45% , 50%{
      left: 0px;
      width: 48px;
    }
    60% , 65%{
      left: 32px;
      width: 16px;
    }
  
    75% , 80% {
      left: 32px;
      width: 48px;
    }
    95%, 100% {
      left: 64px;
      width: 16px;
    }
`;
