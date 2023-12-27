import { Link } from 'react-router-dom';
import * as S from './HeaderSecond.styled';

export const HeaderSecond = () => {
  return (
    <S.Header>
      <S.HeaderNav>
        <S.HeaderLogo>
          <S.LogoMobLink target='_blank'>
            <S.LogoMobImg src='img/logo-mob.png' alt='logo' />
          </S.LogoMobLink>
        </S.HeaderLogo>
        <Link to='/new-product'>
          <S.HeaderBtnPutAd>Разместить объявление</S.HeaderBtnPutAd>
        </Link>
        <S.HeaderButtonSecond>Личный кабинет</S.HeaderButtonSecond>
      </S.HeaderNav>
    </S.Header>
  );
};
