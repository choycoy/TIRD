import Nav from "./Nav";

import StockChartsSection from "./stock-chart/StockChartsSection";
import { DashboardContainer, DashboardContent, SectionTitle } from "../style/StyledComponents";
import TradersListSection from "./trader-list/TradersListSection";
export default function Dashboard() {
  return (
    <DashboardContainer>
      <Nav />
      <DashboardContent>
        <SectionTitle>Last week</SectionTitle>
        <StockChartsSection />
        <SectionTitle>List of Traders</SectionTitle>
        <TradersListSection />
      </DashboardContent>
    </DashboardContainer>
  );
}
