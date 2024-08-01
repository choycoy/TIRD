import {
  DashboardContainer,
  DashboardContent,
  MyAccountTitle,
  ProfileSection,
  ProfileImg,
  UserInfo,
  UserName,
  BalanceText,
  DetailButton,
  AmountInput,
  AmountInputSection,
  AmountTitle,
  DynamicAmountInput,
  MinAmountText,
  AmountSection,
} from "../style/StyledComponents";
import Nav from "./Nav";
import useProfileImg from "../img/userProfile.png";
import styled from "styled-components";
import { useState, useEffect } from "react";

export const TopUpSection = styled.div`
  width: 100%;
  padding: 60px 0 60px 110px;
  display: flex;
  box-sizing: border-box;
`;

export default function MyAccountPage() {
  const [amountInput, setAmountInput] = useState("000.00");
  const [textColor, setTextColor] = useState("#d3d3d3");
  const handleOnChange = (e) => setAmountInput(e.target.value);
  useEffect(() => {
    if (amountInput < 10) {
      setTextColor("red");
    } else {
      setTextColor("#d3d3d3");
    }
  }, [amountInput]);
  return (
    <DashboardContainer>
      <Nav />
      <DashboardContent>
        <MyAccountTitle>My Account</MyAccountTitle>
        <ProfileSection>
          <ProfileImg src={useProfileImg}></ProfileImg>
          <UserInfo>
            <UserName>littlewarrenbuffett666</UserName>
            <BalanceText>My account balance is $2.00</BalanceText>
          </UserInfo>
          <DetailButton>Detail</DetailButton>
        </ProfileSection>
        <TopUpSection>
          <AmountSection>
            <span>$</span>
            <DynamicAmountInput type="text" value={amountInput} onChange={handleOnChange} />
            <AmountInputSection>
              <AmountTitle>Amount</AmountTitle>
              <AmountInput
                type="text"
                value={amountInput}
                onChange={handleOnChange}
                placeholder="Enter top-up amount"
              />
              <MinAmountText $color={textColor}>Minimum top-up amount is $10</MinAmountText>
            </AmountInputSection>
          </AmountSection>
        </TopUpSection>
      </DashboardContent>
    </DashboardContainer>
  );
}
