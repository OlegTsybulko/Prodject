import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
    sizes: number;
    structure: string;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://65340427e1b6f4c590467d09.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <Container className="container">
      <Title>{pizza.title}</Title>
      <ImgFullPizza src={pizza.imageUrl} alt="Pizza" />
      <DisFullPizza>Состав: {pizza.structure}</DisFullPizza>
      <SabTitle>Стоимость: {pizza.price} BYN</SabTitle>
      <Link to="/">
        <Button className="button button--outline button--add">
          <Span>Назад</Span>
        </Button>
      </Link>
    </Container>
  );
};

const Container = styled.div``;

const ImgFullPizza = styled.img`
  margin: 20px;
  width: 100px;
  height: 100px;
`;

const DisFullPizza = styled.p`
  margin: 20px;
`;

const Title = styled.h2``;

const SabTitle = styled.h4`
  margin: 20px;
`;

const Button = styled.button`
  background-color: #fff;
  border-color: #fe5f1e;
`;

const Span = styled.span``;

export default FullPizza;
