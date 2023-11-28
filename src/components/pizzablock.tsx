import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addItems, selectCardById } from "../redux/slice/cardSlise";

type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  img: string;
  sizes: number[];
  type: number[];
};

const typeName = ["тонкое", "традиционное"];

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  img,
  sizes,
  type,
}) => {
  const dispatch = useDispatch();
  const cardItem = useSelector(selectCardById(id));
  const [activType, setActivType] = React.useState(0);
  const [activZize, setActivZize] = React.useState(0);

  const addedCount = cardItem ? cardItem.count : 0;
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      img,
      type: typeName[activType],
      size: sizes[activZize],
    };
    dispatch(addItems(item));
  };

  return (
    <PizzasBlock className="pizza-block">
      <PizzasBlockImg className="pizza-block__image" src={img} alt="Pizza" />
      <PizzasBlockTitle className="pizza-block__title">
        {title}
      </PizzasBlockTitle>
      <PizzaBlockSelector className="pizza-block__selector">
        <PizzaBlockUl>
          {type.map((type) => (
            <PizzaBlockli
              key={type}
              onClick={() => setActivType(type)}
              className={activType === type ? "active" : " "}
            >
              {typeName[type]}
            </PizzaBlockli>
          ))}
        </PizzaBlockUl>
        <PizzaBlockUl2>
          {sizes.map((sizes, index) => (
            <PizzaBlockli2
              key={index}
              onClick={() => setActivZize(index)}
              className={activZize === index ? "active" : " "}
            >
              {sizes} см.
            </PizzaBlockli2>
          ))}
        </PizzaBlockUl2>
      </PizzaBlockSelector>
      <PizzaBlockBottom className="pizza-block__bottom">
        <PizzaBlockPrice className="pizza-block__price">
          {" "}
          От {price} BYN
        </PizzaBlockPrice>
        <ButtonButtonOutlineButtonAdd
          onClick={onClickAdd}
          className="button button--outline button--add"
        >
          <PizzaBlockSvg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </PizzaBlockSvg>
          <PizzaBlockSpanAdd>Добавить</PizzaBlockSpanAdd>
          {addedCount > 0 && <i>{addedCount}</i>}
        </ButtonButtonOutlineButtonAdd>
      </PizzaBlockBottom>
    </PizzasBlock>
  );
};

const PizzasBlock = styled.div`
  width: 280px;
  text-align: center;
  margin: 30px 20px 0 65px;
`;

const PizzasBlockImg = styled.img`
  width: 260px;
`;

const PizzasBlockTitle = styled.h4`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1%;
  margin-bottom: 20px;
`;

const PizzaBlockSelector = styled.div`
  display: flex;
  background-color: #f3f3f3;
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;
`;

const PizzaBlockUl = styled.ul`
  margin-bottom: 6px;
`;

const PizzaBlockli = styled.li`
  padding: 8px;
  flex: 1 1;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
`;

const PizzaBlockUl2 = styled.ul`
  display: flex;
  flex: 1 1;
`;

const PizzaBlockli2 = styled.li`
  padding: 8px;
  flex: 1 1;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
`;

const PizzaBlockBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const PizzaBlockPrice = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
`;

const ButtonButtonOutlineButtonAdd = styled.button`
  color: #fe5f1e;
`;

const PizzaBlockSvg = styled.svg`
  margin-right: 2px;
`;

const PizzaBlockSpanAdd = styled.span`
  font-weight: 600;
  font-size: 16px;
`;
export default PizzaBlock;
