import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CardItems from "../components/cardItems";
import { clearItems, selectCard } from "../redux/slice/cardSlise";
import CartEmpty from "../components/crdEmty";

export const Card: React.FC = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector(selectCard);
  // const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const onClickClear = () => {
    if (window.confirm("Очистить корзину?")) {
      dispatch(clearItems());
    }
  };

  if (items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <ContainerContainerCart>
      <Cart>
        <CartTop>
          <ContentTitle>Корзина</ContentTitle>
          <CartClear onClick={onClickClear}>
            <SpanClier>Очистить корзину</SpanClier>
          </CartClear>
        </CartTop>
        <ContentItems>
          {items.map((item: any) => (
            <CardItems key={item.id} {...item} />
          ))}
        </ContentItems>
        <CartBottom>
          <CartBottomDetails>
            <SpanCartBottomDetails>
              {" "}
              Всего пицц:{" "}
              <BCartBottomDetail>{items.length} шт.</BCartBottomDetail>{" "}
            </SpanCartBottomDetails>{" "}
            Сумма заказа: <BCartBottomDetail>{total} BYN</BCartBottomDetail>{" "}
          </CartBottomDetails>
          <CartBottomButtons>
            <a
              href="/"
              className="button button--outline button--add go-back-btn"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <SpanCartBottomButtons>Вернуться назад</SpanCartBottomButtons>
            </a>
            <div className="button pay-btn">
              <SpanCartBottomButtons>Оплатить сейчас</SpanCartBottomButtons>
            </div>
          </CartBottomButtons>
        </CartBottom>
      </Cart>
    </ContainerContainerCart>
  );
};

const ContainerContainerCart = styled.div`
  max-width: 820px;
  margin: 90px auto;
`;

const Cart = styled.div``;

const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentTitle = styled.h2`
  margin: 35px 0;
`;

const CartClear = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
const SpanClier = styled.span`
  color: #232323;
`;

const ContentItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CartBottom = styled.div`
  margin: 50px 0;
`;
const CartBottomDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SpanCartBottomDetails = styled.span`
  color: #232323;
`;
const BCartBottomDetail = styled.b`
  color: #232323;
`;
const CartBottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
const SpanCartBottomButtons = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export default Card;
