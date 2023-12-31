import styled from 'styled-components';

export const ModalChanged = styled.div`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  height: 50px;
  margin-top: 30px;
  background-color: #e6f6e6;
  border-radius: 6px;
  border-left: 10px solid #009400;
  text-align: center;
  padding-top: 15px;
  width: 300px;
  position: absolute;
  z-index: 3;
  box-sizing: border-box;
`;
export const Message = styled.p`
  color: green;
  font-weight: 600;
  font-size: 18px;
`;
