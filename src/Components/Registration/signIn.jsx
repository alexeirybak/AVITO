import { useState } from 'react';
import {
  handleEmail,
  handlePassword,
  handleSignIn,
  validateFormLog,
} from '../../helpers/sign';
import * as S from './signIn.styled';
import { useDispatch } from 'react-redux';

export const SignIn = ({ setChoiceReg }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <S.ModalLogo>
              <S.ModalLogoImg src='img/logo_modal.png' alt='' />
            </S.ModalLogo>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.ModalInputLogin
              value={email}
              onChange={(event) => handleEmail(setEmail, setError, event)}
              type='text'
              placeholder='email'
            />
            <S.ModalInputPassword
              value={password}
              onChange={(event) => handlePassword(setPassword, setError, event)}
              type='password'
              placeholder='Пароль'
            />
            <S.ModalBtnEnter>
              <S.ModalBtnEnterLink
                onClick={(event) => {
                  if (validateFormLog(email, password, setError, event)) {
                    handleSignIn(email, password, setError, dispatch);
                  }
                }}
              >
                Войти
              </S.ModalBtnEnterLink>
            </S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <S.ModalBtnSignupLink onClick={() => setChoiceReg(false)}>
                Зарегистрироваться
              </S.ModalBtnSignupLink>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
};
