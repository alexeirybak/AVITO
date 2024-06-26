import { Link } from 'react-router-dom';
import { getTime } from '../../helpers/time';
import { formatPrice } from '../../helpers/price';
import { host } from '../../Api/host';
import * as S from './Card.styled';

export const Card = ({ product }) => {
  const timeResult = getTime(product.created_on);
  return (
    <S.CardItem>
      <S.CardItemContainer>
        <S.CardImageWrapper>
          <Link to={`/product/${product.id}`}>
            <S.CardImage
              src={
                product.images.length > 0
                  ? `${host}/${product.images[0].url}`
                  : '/img/empty-photo.jpeg'
              }
              alt='picture'
            />
          </Link>
        </S.CardImageWrapper>
        <S.CardContent>
          <S.CardContentLink>
            <Link to={`/product/${product.id}`}>
              <S.CardTitle>{product.title}</S.CardTitle>
            </Link>
          </S.CardContentLink>
          <S.CardPrice>
            {product.price
              ? `${formatPrice(product.price)}`
              : `Цена не указана`}
          </S.CardPrice>
          <S.CardPlace>
            {product.user.city
              ? product.user.city
              : 'Продавец где-то рядом'}
          </S.CardPlace>
          <S.CardDate>{timeResult}</S.CardDate>
        </S.CardContent>
      </S.CardItemContainer>
    </S.CardItem>
  );
};
