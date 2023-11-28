import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSort,
  setCategories,
  setcCurrentPage,
} from "../redux/slice/filterSlice";
import axios from "axios";
import Categories from "../components/categories";
import Sort from "../components/sort";
import PizzaBlock from "../components/pizzablock";
import Pagination from "../components/pagination";
import { AppContext } from "../App";

const Home = () => {
  const dispatch = useDispatch();
  const { categories, sort, currentPage } = useSelector(selectSort);

  const { searchVelue } = React.useContext(AppContext);

  const [items, setItems] = React.useState([]);

  const onClickCatergories = (index) => {
    dispatch(setCategories(index));
  };

  const onChangePage = (number) => {
    dispatch(setcCurrentPage(number));
  };

  React.useEffect(() => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categories > 0 ? `category=${categories}` : "";
    const searchPizzas = searchVelue ? `&search=${searchVelue}` : "";

    axios
      .get(
        `https://65340427e1b6f4c590467d09.mockapi.io/items?page=${currentPage}&limit=3&${category}&sortBy=${sortBy}&order=${order}${searchPizzas}`
      )
      .then((res) => {
        setItems(res.data);
      });
  }, [categories, sort, searchVelue, currentPage]);

  const pizzas = items
    .filter((obj) => {
      //@ts-ignore
      if (obj.title.toLowerCase().includes(searchVelue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => (
      //@ts-ignore
      <PizzaBlock
        key={obj["id"]}
        title={obj["title"]}
        price={obj["price"]}
        img={obj["imageUrl"]}
        sizes={obj["sizes"]}
        type={obj["types"]}
      />
    ));

  return (
    <>
      <ContentTop className="content__top">
        <Categories
          velue={categories}
          onClickCatergories={onClickCatergories}
        />
        <Sort />
      </ContentTop>
      <HomeTitle className="content__title">Все пиццы</HomeTitle>
      <ContentItems className="content__items">{pizzas}</ContentItems>
      <Pagination value={currentPage} onChangePage={onChangePage} />
    </>
  );
};

const ContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeTitle = styled.h2`
  margin: 35px 0;
`;

const ContentItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Home;
