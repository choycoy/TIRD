import React, { useState, useEffect } from "react";
import StockChart from "./StockChart";
import { SkeletonLoader4Tiingo } from "../SkeletonLoaders";
import { fetchStockData } from "./fetchStockData";
import { StockChartsSectionContainer } from "../../style/StyledComponents";

const stockSymbols = ["TSLA", "SOXS", "NVDA", "AAPL"]; //"TSLA", "SOXS", "NVDA", "AAPL"
const endDate = "2024-07-26";
const startDate = "2024-07-22";

const StockChartsSection = () => {
  const [stocksData, setStocksData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStockData(stockSymbols, startDate, endDate);
        setStocksData(data);
      } catch (error) {
        console.error("Failed to fetch stock data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <StockChartsSectionContainer>
      {loading ? (
        <SkeletonLoader4Tiingo />
      ) : (
        stocksData.map((stock) => (
          <StockChart
            key={stock.symbol}
            STOCK_SYMBOL={stock.symbol}
            data={stock.data}
            endPrice={stock.endPrice}
            percentageChange={stock.percentageChange}
            lineColor={stock.lineColor}
          />
        ))
      )}
    </StockChartsSectionContainer>
  );
};

export default StockChartsSection;
