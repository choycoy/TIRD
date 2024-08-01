import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChartContainer, StockDetail } from "../style/StyledComponents";

const SkeletonLoader = ({ count = 4 }) => {
  const skeletonArray = Array.from({ length: count }, (_, index) => (
    <ChartContainer key={index}>
      <StockDetail>
        <Skeleton width={140} height={21} style={{ opacity: 0.7, marginBottom: "10px" }} />
      </StockDetail>
      <Skeleton width={188} height={120} style={{ opacity: 0.7 }} />
    </ChartContainer>
  ));

  return <>{skeletonArray}</>;
};

export default SkeletonLoader;
