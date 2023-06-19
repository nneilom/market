import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { collectionContext } from "../../context/CollectionContextProvider";
import CollectionCard from "./CollectionCard";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";
import "./styles/CollectionList.css";
import { CodeOffSharp } from "@mui/icons-material";
import { logDOM } from "@testing-library/react";

const CollectionList = () => {
  const { getCards, collection, searchResults } = useContext(collectionContext);
  const [filterValue, setFilterValue] = useState("");
  const [filterSize, setFilterSize] = useState("");

  console.log(filterSize);
  useEffect(() => {
    getCards();
  }, []);
  const location = useLocation();
  console.log(location.pathname);
  // ! а вот та часть которой не хватало

  const cards = searchResults.length ? searchResults : collection;
  // const closthes = cards.filter((elem) => {
  //   return elem.type === location.pathname;
  // });

  //! filter function
  function filterCard(cards) {
    if (filterValue) {
      return cards.filter((elem) => {
        if (Array.isArray(elem.color)) {
          return elem.color.includes(filterValue);
        }
        return elem.color === filterValue;
      });
    }
    return cards;
  }

  function filterCardSize(cards) {
    if (filterSize) {
      return cards.filter((elem) => {
        if (Array.isArray(elem.size)) {
          return elem.size.includes(filterSize);
        }
        return elem.size === filterSize;
      });
    }
    return cards;
  }

  const [page, setPage] = useState(1);
  const itemPerPage = 6;
  const count = Math.ceil(cards.length / itemPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemPerPage;

    const end = begin + itemPerPage;

    return cards.slice(begin, end);
  }

  return (
    <div>
      <div className="main">
        <p style={{ marginBottom: "0" }}>Filter: </p>
        <select
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="">All Colors</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="gray">Gray</option>
          <option value="blue">Blue</option>
          <option value="olive">Olive</option>
          <option value="yellow">Yellow</option>
          <option value="brown">Brown</option>
          <option value="red">Red</option>
        </select>
        <select
          value={filterSize}
          onChange={(e) => setFilterSize(e.target.value)}
        >
          <option value="">All Size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="cards">
        {filterValue === "" && filterSize === ""
          ? currentData().map((item) => (
              <CollectionCard item={item} key={item.id} />
            ))
          : filterCardSize(filterCard(cards)).map((item) => (
              <CollectionCard item={item} key={item.id} />
            ))}
      </div>

      <Stack spacing={2} style={{ margin: "40px" }}>
        <Pagination
          style={{ margin: "0 auto", display: "block" }}
          count={count}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default CollectionList;
