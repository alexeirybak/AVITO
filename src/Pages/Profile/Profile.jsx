import { useEffect, useState } from 'react';
import { HeaderSecond } from '../../Components/HeaderAdditional/HeaderAdditional';
import { ReturnToMain } from '../../Components/ReturnToMain.js/ReturnToMain';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import { useChangeDataMutation, useGetMeQuery } from '../../Store/services/getMe';
import {
  getAccessTokenLocal,
  getRefreshTokenLocal,
  saveTokenUserLocal,
} from '../../helpers/token';
import { updateToken } from '../../Api/tokenApi';
import {
  handleAvatarClick,
  handleAvatarUpload,
  handleChangeData,
  profileUserData,
  saveUserLocal,
} from '../../helpers/user';
import { useGetAllMyAdsQuery } from '../../Store/services/getMyAds';
import { ModalChanged } from '../../Components/ModalChanged/modalChanged';
import { CardLoader } from '../../Components/Loader/CardLoader';
import { useGetNewTokenMutation } from '../../Store/services/getToken';
import * as S from './Profile.styled';

export const Profile = ({}) => {
  const [city, setCity] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [surname, setSurname] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const access = getAccessTokenLocal();
  const fileUpload = document.getElementById('file-upload');
  const {
    data = [],
    isError,
    error,
    isSuccess,
    refetch,
  } = useGetMeQuery(access);
  const [
    changeData,
    {
      isError: isErrorChangeData,
      error: errorChangeData,
      isSuccess: isSuccessChangeData,
      isLoading: isLoadingChange,
    },
  ] = useChangeDataMutation();
  const { data: dataMyAds = [], isLoading } = useGetAllMyAdsQuery(access);
  const [refreshAllTokens, { data: dataRefresh, isSuccess: isSuccessRefresh }] =
    useGetNewTokenMutation();
  const asyncUpgate = async () => {
    await updateToken();
    await refetch();
    return;
  };
  useEffect(() => {
    if (isErrorChangeData) {
      const accessToken = getAccessTokenLocal();
      const refreshToken = getRefreshTokenLocal();
      refreshAllTokens({ access: accessToken, refresh: refreshToken });
    }
  }, [isErrorChangeData]);
  const updateNewData = async () => {
    saveTokenUserLocal(dataRefresh);
    const access = getAccessTokenLocal();
    await handleChangeData(access, userName, surname, phone, city, changeData);
  };
  useEffect(() => {
    if (isSuccessRefresh) {
      updateNewData();
    }
  }, [isSuccessRefresh]);

  useEffect(() => {
    if (isSuccess && !isLoadingChange) {
      saveUserLocal(data.email, data.name, data.id);
      profileUserData(
        data,
        setUserName,
        setSurname,
        setCity,
        setPhone,
        setAvatar,
      );
    }
    if (
      isError &&
      error.status === 401 &&
      error.data.detail ===
        'Could not validate credentials: Not enough segments'
    ) {
      asyncUpgate();
      return;
    }
    if (
      isError &&
      error.status === 401 &&
      error.data.detail ===
        'Could not validate credentials: Signature has expired'
    ) {
      asyncUpgate();
      return;
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (isSuccessChangeData) {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }
  }, [isSuccessChangeData]);

  const handleSave = async () => {
    await handleChangeData(access, userName, surname, phone, city, changeData);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <HeaderSecond />
        <S.Main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <ReturnToMain />
              <S.MainH2>
                {userName === ''
                  ? 'Здравствуйте, Неизвестный!'
                  : `Здравствуйте, ${userName}!`}
              </S.MainH2>
              <S.MainProfile>
                <S.ProfileContent>
                  <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                  <S.ProfileSettings>
                    <S.SettingsLeft>
                      <S.SettingsImg>
                        <S.SettingsImgLink>
                          <S.SettingsImgImg
                            src={
                              avatar === null
                                ? '/img/empty-profile.png'
                                : `http://localhost:8090/${avatar}`
                            }
                            alt='first_photo'
                          />
                        </S.SettingsImgLink>
                      </S.SettingsImg>
                      <S.SettingsImgInput
                        id='file-upload'
                        type='file'
                        accept='image/*'
                        onChange={(event) => {
                          event.preventDefault();
                          const file = event.target.files?.[0];
                          if (file) {
                            handleAvatarUpload(file, setAvatar, refetch);
                          }
                        }}
                      ></S.SettingsImgInput>
                      <S.SettingsChangePhoto
                        onClick={(event) =>
                          handleAvatarClick(event, fileUpload, setAvatar)
                        }
                      >
                        Заменить
                      </S.SettingsChangePhoto>
                    </S.SettingsLeft>
                    <S.SettingsRight>
                      <S.SettingsForm>
                        <S.SettingsNameBox>
                          <S.SettingsDiv>
                            <S.SettingsLabel htmlFor='settings-fname'>
                              Имя
                            </S.SettingsLabel>
                            <S.SettingsFName
                              name='fname'
                              type='text'
                              placeholder=''
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                            />
                          </S.SettingsDiv>
                          <S.SettingsDiv>
                            <S.SettingsLabel htmlFor='settings-lname'>
                              Фамилия
                            </S.SettingsLabel>
                            <S.SettingsLName
                              name='lname'
                              type='text'
                              placeholder=''
                              value={surname}
                              onChange={(e) => setSurname(e.target.value)}
                            />
                          </S.SettingsDiv>
                        </S.SettingsNameBox>
                        <S.SettingsDiv>
                          <S.SettingsLabel htmlFor='settings-city'>
                            Город
                          </S.SettingsLabel>
                          <S.SettingsCity
                            name='city'
                            type='text'
                            placeholder=''
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </S.SettingsDiv>
                        <S.SettingsDiv>
                          <S.SettingsLabel htmlFor='settings-phone'>
                            Телефон
                          </S.SettingsLabel>
                          <S.SettingsPhone
                            name='phone'
                            type='tel'
                            placeholder='+(999) 999 99 99'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </S.SettingsDiv>
                        <S.ButtonWrapper>
                          <S.SettingsButton onClick={handleSave}>
                            Сохранить
                          </S.SettingsButton>
                          <ModalChanged isOpen={isOpen} />
                        </S.ButtonWrapper>
                      </S.SettingsForm>
                    </S.SettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProfile>
              <S.MainTitle>Мои товары</S.MainTitle>
            </S.MainCenterBlock>
            {isLoading ? (
              <CardLoader />
            ) : (
              <S.MainContent>
                <S.ContentCards>
                  {dataMyAds.map((product) => (
                    <Card key={product.id} product={product} />
                  ))}
                </S.ContentCards>
              </S.MainContent>
            )}
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
