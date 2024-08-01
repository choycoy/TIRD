import ApexCharts from "react-apexcharts";

import { PriceDetail, ChartContainer, StockDetail, StockTitle } from "../../style/StyledComponents";

export default function StockChart({ STOCK_SYMBOL, data, endPrice, percentageChange, lineColor }) {
  return (
    <ChartContainer>
      <StockDetail>
        <StockTitle>{STOCK_SYMBOL}</StockTitle>
        <PriceDetail>
          ${endPrice}
          <span style={{ color: lineColor }}> ({percentageChange}%)</span>
        </PriceDetail>
      </StockDetail>
      <ApexCharts
        style={{ width: "100%", height: "130px" }}
        type="line"
        series={[
          {
            name: "Closing Price",
            data: data,
          },
        ]}
        options={{
          theme: {
            mode: "dark",
          },
          chart: {
            height: "100%",
            width: "100%",
            toolbar: {
              show: false,
            },
            background: "transparent",
            zoom: {
              enabled: true,
            },
          },
          stroke: {
            width: 2,
          },
          colors: [lineColor],
          fill: {
            type: "solid",
            colors: [lineColor],
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          tooltip: {
            enabled: true,
            y: {
              formatter: (v) => `$ ${v.toFixed(2)}`,
            },
          },
        }}
      />
    </ChartContainer>
  );
}
