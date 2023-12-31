import styled from 'styled-components';

export const ModalReviewsReviews = styled.div`
  width: 100%;
  height: 495px;
`;

export const ModalScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 0px;
  }
`;

export const Review = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const ReviewLeft = styled.div`
  margin-right: 12px;
`;
export const ReviewImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
`;
export const ReviewRight = styled.div`
  display: block;
`;
export const ReviewNameFontT = styled.div`
  margin-bottom: 12px;
  font-weight: 600;

  font-size: 16px;
  line-height: 32px;
  color: #000000;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`;
export const Span = styled.span`
  margin-left: 10px;
  color: #5f5f5f;
`;
export const ReviewTitleFontT = styled.h5`
  font-weight: 600;

  font-size: 16px;
  line-height: 32px;
  color: #000000;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`;
export const ReviewTextFontT = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #000000;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`;
