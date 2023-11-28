import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cartEmptyImg from "../assets/empty-cart.png";

const CartEmpty: React.FC = () => (
  <Cart className="cart cart--empty">
    <CartTitle className="cart title">
      Корзина пустая <CartSpan className="cart span">😕</CartSpan>
    </CartTitle>
    <CartText className="cart text">
      Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
      пиццу, перейди на главную страницу.
    </CartText>
    <CartImg src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <CartSpanBack className="span back">Вернуться назад</CartSpanBack>
    </Link>
  </Cart>
);

const Cart = styled.div`
  margin: 0 auto;
  width: 560px;
  text-align: center;
`;

const CartTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

const CartSpan = styled.span`
  color: #232323;
`;

const CartText = styled.p`
  font-size: 18px;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #777777;
`;

// const Br = styled.br``;

const CartImg = styled.img`
  display: block;
  width: 300px;
  margin: 45px auto 60px;
`;

const CartSpanBack = styled.span`
  color: #fff;
`;
export default CartEmpty;
