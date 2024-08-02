import axios from "axios";

export const fetchStockData = async (symbols, startDate, endDate) => {
  try {
    const requests = symbols.map((symbol) =>
      axios.get(
        `/iex/${symbol}/prices?startDate=${startDate}&endDate=${endDate}&resampleFreq=1hour&token=${process.env.REACT_APP_TIINGO_API_KEY}`
      )
    );

    const responses = await Promise.all(requests);

    return responses.map((response, index) => {
      const data = response.data;
      const symbol = symbols[index];

      if (data && data.length > 0) {
        const filteredData = data.filter((item) => item.open !== null && item.close !== null && item.date !== null);

        const startPrice = filteredData[0]?.close;
        const endPrice = filteredData[filteredData.length - 1]?.close;

        const formattedData = filteredData.map((item) => ({
          x: new Date(item.date).getTime(),
          y: item.close,
        }));

        const percentageChange =
          startPrice && endPrice ? (((endPrice - startPrice) / startPrice) * 100).toFixed(1) : "N/A";

        const lineColor = endPrice > startPrice ? "#FF0000" : "#0096FF";

        return {
          symbol,
          data: formattedData,
          endPrice: endPrice ? endPrice.toFixed(2) : "N/A",
          percentageChange:
            endPrice && startPrice ? (endPrice > startPrice ? `+${percentageChange}` : `${percentageChange}`) : "N/A",
          lineColor,
        };
      }

      return { symbol, data: [], endPrice: "N/A", percentageChange: "N/A", lineColor: "#0096FF" };
    });
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};
