import * as S from './ModalChanged.styled';

export const ModalChanged = ({ isOpen }) => {
  return (
    <S.ModalChanged $isOpen={isOpen}>
      <S.Message>Успешно изменено!</S.Message>
    </S.ModalChanged>
  );
};
