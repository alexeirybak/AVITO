import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { ReturnToMain } from '../../Components/ReturnToMain.js/ReturnToMain';
import { HeaderSecond } from '../../Components/HeaderAdditional/HeaderAdditional';
import { Review } from '../../Components/reviews/review';
import { Editor } from '../../Components/Editor/editor';
import { useGetAdvIDQuery } from '../../Store/services/getAdvId';
import { getTime, formatDate } from '../../helpers/time';
import { useGetCommentsQuery } from '../../Store/services/getComments';
import { updateToken } from '../../Api/tokenApi';
import { useDeleteAdvMutation } from '../../Store/services/getMyAds';
import { getAccessTokenLocal } from '../../helpers/token';
import { ArrowLeftSvg } from '../../Components/ToLeftSvg/ToLeftSvg';
import { formatPrice } from '../../helpers/price';
import { useGetAllUsersQuery } from '../../Store/services/getUsers';
import { host } from '../../Api/host';
import * as S from '../Main/main.styled';
import * as St from './Product.styled';
 
export const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [
    deleteAdv,
    { error: errorDelete, isError: isErrorDelete, isSuccess: isSuccessDelete },
  ] = useDeleteAdvMutation();
  const [timeResult, setTimeResult] = useState('00.00.00');
  const [userId, setUserId] = useState(null);
  const [dataUsers, setDataUsers] = useState([]);
  const [showFullPhone, setShowFullPhone] = useState(false);
  const { data: dataComments = [] } = useGetCommentsQuery(id);
  const {
    data: dataSeller = [],
    isError: isErrorSeller,
    isSuccess: isSuccessSeller,
    refetch: refetchSeller,
  } = useGetAllUsersQuery();
  const [selectedImage, setSelectedImage] = useState('/img/empty-photo.jpeg');
  const { data = [], isError, isSuccess, refetch } = useGetAdvIDQuery(id);
  const userLoggedIn = getAccessTokenLocal();

  const userIsSeller = Boolean(
    String(data.user_id) === window.localStorage.getItem('id'),
  );

  const deleteThisAdv = async () => {
    const access = getAccessTokenLocal();
    await deleteAdv({ access, id });
    return;
  };
  useEffect(() => {
    if (isError) {
      refetch();
    }
  }, [isError]);
  const mainUpdaiteToken = async () => {
    await updateToken();
    deleteThisAdv();
    return;
  };
  if (isErrorDelete && errorDelete.status === 401) {
    mainUpdaiteToken();
  }
  if (isSuccessDelete) {
    navigate(-1);
  }

  useEffect(() => {
    if (isSuccess) {
      const result = getTime(data.created_on);
      setTimeResult(result);
      setUserId(Number(data.user.id) - 1);
    }
    if (data.images && data.images.length > 0) {
      setSelectedImage(`${host}/${data.images[0].url}`);
    } else {
      if (isSuccess) {
        setSelectedImage('/img/noFoto.jpeg');
      }
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isSuccess && showNext) {
      setShow(true);
    }
  }, [isSuccess, showNext]);

  useEffect(() => {
    if (isSuccessSeller) {
      setDataUsers(dataSeller);
      setShowNext(true);
    }
  }, [isSuccessSeller]);

  useEffect(() => {
    if (isErrorSeller) {
      refetchSeller();
    }
  }, [isErrorSeller]);
  const [openReviews, setOpenReviews] = useState(false);
  const openReviewsModal = () => {
    setOpenReviews(true);
  };

  const [showAdvEdit, setShowAdvEdit] = useState(false);
  const openAdvEditor = () => {
    setShowAdvEdit(true);
  };
  const handleCloseAllModals = () => {
    setOpenReviews(false);
    setShowAdvEdit(false);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return show ? (
    <S.Wrapper>
      <S.Container>
        {userLoggedIn && userLoggedIn !== 'undefined' ? (
          <HeaderSecond />
        ) : (
          <Header />
        )}
        <S.Main>
          <St.ProductContainer>
            <ReturnToMain />
          </St.ProductContainer>
          <St.ProductArticle>
            <St.ProductArticleContent>
              <St.ProductArticleLeft>
                <St.ProductArticleFillImg>
                  <Link to='/'>
                    <ArrowLeftSvg />
                  </Link>
                  <St.ProductArticleImage
                    src={selectedImage}
                    alt='Фото товара'
                  />
                  <St.ProductImageBarDesktop>
                    {data.images.map((image) => (
                      <St.ProductImageBarDiv
                        key={image.id}
                        src={`${host}/${image.url}`}
                        alt='Фото товара'
                        onClick={() => handleImageClick(`${host}/${image.url}`)}
                        onMouseEnter={() =>
                          handleImageClick(`${host}/${image.url}`)
                        }
                      />
                    ))}
                  </St.ProductImageBarDesktop>
                  <St.ProductImageBarMobile>
                    {data.images.map((image) => (
                      <St.ProductImageBarMobileCircle
                        key={image.id}
                        onClick={() => handleImageClick(`${host}/${image.url}`)}
                        $active={selectedImage === `${host}/${image.url}`}
                      />
                    ))}
                  </St.ProductImageBarMobile>
                </St.ProductArticleFillImg>
              </St.ProductArticleLeft>
              <St.ProductArticleRight>
                <St.ProductArticleRightBlock>
                  <St.ProductTitle>{data.title}</St.ProductTitle>
                  <St.ProductInfo>
                    <St.ProductDate>{timeResult}</St.ProductDate>
                    <St.ProductCity>
                      {data.user.city
                        ? data.user.city
                        : 'что нам город? Перед нами весь мир...не указан короче'}
                    </St.ProductCity>
                    <St.ProductReviews onClick={openReviewsModal}>
                      {dataComments.length === 0
                        ? `еще нет отзывов, но вы можете сделать первый`
                        : `Отзывов: ${dataComments.length}`}
                    </St.ProductReviews>
                  </St.ProductInfo>
                  <St.ProductPrice>{formatPrice(data.price)}</St.ProductPrice>
                  {userIsSeller ? (
                    <St.ProductButtonBox>
                      <St.ProductButton onClick={openAdvEditor}>
                        Редактировать
                      </St.ProductButton>
                      <St.ProductButton onClick={() => deleteThisAdv()}>
                        Снять с публикации
                      </St.ProductButton>
                    </St.ProductButtonBox>
                  ) : (
                    <St.ProductButton
                      onClick={() => setShowFullPhone(!showFullPhone)}
                    >
                      Показать&nbsp;телефон&nbsp;
                      <St.ProductButtonSpan>
                        {dataUsers[userId].phone
                          ? showFullPhone
                            ? dataUsers[userId].phone
                            : dataUsers[userId].phone.substring(0, 6) +
                              'XXX XX XX'
                          : 'номер не указан'}
                      </St.ProductButtonSpan>
                    </St.ProductButton>
                  )}
                  <St.ProductAuthor>
                    <St.ProductAuthorImage
                      src={
                        dataUsers[userId].avatar === null
                          ? '/img/empty-profile.png'
                          : `${host}/${dataUsers[userId].avatar}`
                      }
                      alt=''
                    />
                    <St.ProductAuthorContent>
                      <Link to={`/seller/${dataUsers[userId].id}`}>
                        <St.ProductAuthorName>
                          {dataUsers[userId].name
                            ? dataUsers[userId].name
                            : 'Продавец решил остаться безымянным'}
                        </St.ProductAuthorName>
                      </Link>
                      <St.ProductAuthorAbout>
                        Продает товары с{' '}
                        {formatDate(dataUsers[userId].sells_from)}
                      </St.ProductAuthorAbout>
                    </St.ProductAuthorContent>
                  </St.ProductAuthor>
                </St.ProductArticleRightBlock>
              </St.ProductArticleRight>
            </St.ProductArticleContent>
          </St.ProductArticle>
          <St.ProductDescription>
            <St.ProductDescriptionTitle>
              Описание товара
            </St.ProductDescriptionTitle>
            <St.ProductDescriptionContent>
              <St.ProductDescriptionText>
                {data.description
                  ? data.description
                  : 'Продавец не описал товар'}
              </St.ProductDescriptionText>
            </St.ProductDescriptionContent>
          </St.ProductDescription>
          {openReviews ? (
            <Review
              closeModal={handleCloseAllModals}
              dataComments={dataComments}
            />
          ) : null}
          {showAdvEdit ? (
            <Editor data={data} closeModal={handleCloseAllModals} />
          ) : null}
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  ) : null;
};
