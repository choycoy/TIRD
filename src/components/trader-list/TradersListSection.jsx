import React, { useState, useEffect } from "react";
import { ListSectionContainer } from "../../style/StyledComponents";
import TraderList from "./TradersList";
import PaginationSection from "./PaginationSection";
import ButtonList from "./ButtonList";

export default function TradersListSection() {
  const [tradersList, setTradersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    option: "wholeOption",
    rating: "wholeRating",
    followers: "wholeFollowers",
  });
  const itemsPerPage = 8;

  useEffect(() => {
    fetch("/tradersDummyData.json")
      .then((response) => response.json())
      .then((data) => {
        setTradersList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filterTraders = (traders) => {
    return traders.filter((trader) => {
      const optionMatch = filters.option === "wholeOption" || trader.option === filters.option;
      const ratingMatch = filters.rating === "wholeRating" || trader.rating >= parseFloat(filters.rating);
      const followersMatch = filters.followers === "wholeFollowers" || trader.followers >= parseInt(filters.followers);

      return optionMatch && ratingMatch && followersMatch;
    });
  };

  const filteredTraders = filterTraders(tradersList);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredTraders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <ListSectionContainer>
      <ButtonList setFilters={setFilters} filters={filters} />
      <TraderList currentItems={currentItems} />
      <PaginationSection currentPage={currentPage} tradersList={filteredTraders} setCurrentPage={setCurrentPage} />
    </ListSectionContainer>
  );
}
