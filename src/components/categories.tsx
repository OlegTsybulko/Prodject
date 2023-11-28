import React from "react";
import styled from "styled-components";

type CategoriesProps = {
  velue: number;
  onClickCatergories: any;
};

const Categories: React.FC<CategoriesProps> = ({
  velue,
  onClickCatergories,
}) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <Category className="categories">
      <CatigoriesNameUl className="catigoriesname">
        {categories.map((catigoriesName, index) => (
          <LiCatigories
            key={index}
            onClick={() => onClickCatergories(index)}
            className={velue === index ? "active" : " "}
          >
            {catigoriesName}
          </LiCatigories>
        ))}
      </CatigoriesNameUl>
    </Category>
  );
};

const Category = styled.div``;

const CatigoriesNameUl = styled.ul``;

const LiCatigories = styled.li`
  background-color: #282828;
  color: #fff;
`;

export default Categories;
