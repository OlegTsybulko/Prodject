import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectSort, setSort } from "../redux/slice/filterSlice";

type ListItem = {
  name: string;
  sortProperty: string;
};

export const list: ListItem[] = [
  { name: "популярности (DESC)", sortProperty: "rating" },
  { name: "популярности (ASC)", sortProperty: "-rating" },
  { name: "цене (DESC)", sortProperty: "prise" },
  { name: "цене (ASC)", sortProperty: "-prise" },
  { name: "алфавиту (DESC)", sortProperty: "title" },
  { name: "алфавиту (ASC)", sortProperty: "-title" },
];

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  // const sortRef = React.useRef()

  const [open, setOpen] = React.useState(false);

  const onClickMenu = (obj: ListItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  // React.useEffect(()=>{
  // //   document.body.addEventListener('click',(event)=>{
  // //     if(!event.path.includs(sortRef.current)) {
  // //     setOpen(false)
  // //     }
  // //   })
  //   const clickSort = (event) =>{
  //     if(event.path.includes(sortRef.current)) {
  //       setOpen(false)
  //     }
  //   }

  //   document.body.addEventListener('click', clickSort)

  //   return ()=>{
  //     document.body.removeEventListener('click', clickSort)
  //   }
  // }, [])

  return (
    <SortBlock className="sort">
      <SortLabel className="sort__label">
        <SortSvg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </SortSvg>
        <B>Сортировка по:</B>
        <SortSpan onClick={() => setOpen(!open)}>{sort.name}</SortSpan>
      </SortLabel>
      {open && (
        <SortPopup className="sort__popup">
          <SortUl>
            {list.map((obj, index) => (
              <SortLi
                key={index}
                onClick={() => onClickMenu(obj)}
                className={
                  sort.sortProperty === obj.sortProperty ? "active" : " "
                }
              >
                {obj.name}
              </SortLi>
            ))}
          </SortUl>
        </SortPopup>
      )}
    </SortBlock>
  );
};

const SortBlock = styled.div`
  position: relative;
`;

const SortLabel = styled.div`
  display: flex;
  align-items: center;
`;

const SortSvg = styled.svg`
  margin-right: 8px;
`;

const B = styled.b`
  margin-right: 8px;
`;

const SortSpan = styled.span`
  color: #fe5f1e;
  border-bottom: 1px dashed #fe5f1e;
  cursor: pointer;
`;

const SortPopup = styled.div`
  position: absolute;
  right: 0;
  margin-top: 15px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
`;

const SortUl = styled.ul`
  overflow: hidden;
`;

const SortLi = styled.li`
  font-weight: bold;
  color: #fe5f1e;
`;
export default Sort;
