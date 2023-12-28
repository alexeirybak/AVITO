import { Link } from 'react-router-dom';
import * as S from './Header.styled';

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderNav>
        <Link to='/reg'>
          <S.HeaderButton type='submit'>
            Вход в личный кабинет
          </S.HeaderButton>
        </Link>
      </S.HeaderNav>
    </S.HeaderWrapper>
  );
};
