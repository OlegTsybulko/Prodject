import React from "react";
import styled from "styled-components";

type CardItemsProps = {
  id: string;
  title: string;
  total: number;
  type: string;
  price: number;
  size: number;
  count: number;
  img: string;
};

const CardItems: React.FC<CardItemsProps> = ({
  id,
  title,
  total,
  type,
  price,
  size,
  count,
  img,
}) => {
  return (
    <CartItem>
      <CartItemImg>
        <PizzaBlockImage src={img} alt="Pizza" />
      </CartItemImg>
      <CartItemInfo>
        <TitleCartItemInfo>{title}</TitleCartItemInfo>
        <DescriptionCartItemInfo>
          {type}, {size} см.
        </DescriptionCartItemInfo>
      </CartItemInfo>
      <CartItemCount />
      <CartItemPrice>
        <B>{price} BYN</B>
      </CartItemPrice>
      <CartItemRemove />
    </CartItem>
  );
};

const CartItem = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #f6f6f6;
  padding-top: 30px;
  margin-top: 30px;
`;
const CartItemImg = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  width: 10%;
`;
const PizzaBlockImage = styled.img`
  width: 80px;
`;
const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;
const TitleCartItemInfo = styled.h3`
  color: #232323;
`;
const DescriptionCartItemInfo = styled.p`
  color: #232323;
`;
const CartItemCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13%;
`;
const B = styled.b`
  color: #232323;
`;

const CartItemPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
`;
const CartItemRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 4%;
`;

export default CardItems;
