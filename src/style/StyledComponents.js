import styled from "styled-components";
import { Link } from "react-router-dom";
export const InputFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #e7e9ea;
    font-size: 14px;
    margin-bottom: 20px;
  }

  input {
    box-sizing: border-box;
    margin-top: 6px;
    width: 300px;
    height: 35px;
    background-color: transparent;
    border: 0.5px solid #808080;
    border-radius: 4px;
    outline: none;
    color: white;
    padding: 5px 10px;
    font-size: 18px;
  }
`;

export const PhoneNoSection = styled.div`
  display: flex;
  width: 400px;
  height: 42px;
  align-items: center;
`;

export const SendButton = styled.button`
  font-size: 14px;
  box-sizing: border-box;
  background-color: ${({ $send }) => ($send === "sent" ? "white" : "transparent")};
  color: ${({ $send }) => ($send === "sent" ? "black" : "white")};
  border: 0.5px solid #e7e9ea;
  width: 55px;
  font-weight: bold;
  height: 35px;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 6px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: black;
    background-color: white;
  }
`;
export const InputWithStatus = styled.div`
  display: flex;
  align-items: center;
`;
export const StatusText = styled.span`
  color: ${({ $status }) => $status};
  font-size: 14px;
  margin-left: 12px;
  white-space: nowrap;
`;
export const FooterContainer = styled.div`
  position: fixed;
  bottom: 10px;
  min-width: 600px;
  left: 50%;
  transform: translate(-50%);
`;

export const FooterList = styled.ul`
  color: #71767b;
  list-style: none;
  display: flex;
  width: 100%;
  font-size: 11px;
  padding: 0;
  justify-content: space-between;
`;

export const FooterItem = styled.li`
  cursor: pointer;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 500;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(160, 160, 160, 0.3);
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 650px;
  height: 650px;
  background-color: black;
  border-radius: 16px;
  color: white;
`;

export const ModalContent = styled.div`
  width: ${({ $formType }) => ($formType === "signUp" ? "450px" : "300px")};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Heading1 = styled.h1`
  margin-top: 0;
  text-align: ${({ $formType }) => ($formType === "signUp" ? "" : "left")};
`;

export const CloseButton = styled.span`
  color: #aaa;
  position: fixed;
  top: 8px;
  right: 18px;
  font-size: 28px;

  &:hover,
  &:focus {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const SignUpButton = styled.button`
  margin-top: 50px;
  height: 50px;
  border: 1px solid white;
  font-weight: bold;
  font-size: 24px;
  background-color: transparent;
  color: white;
  border-radius: 4px;
  width: 100%;

  &:hover,
  &:focus {
    color: black;
    background-color: white;
    cursor: pointer;
    transition: 0.3s;
  }
`;
export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 100vh;
`;
export const GridContainer = styled.div`
  color: white;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 200px;
  }

  @media (max-width: 999px) {
    grid-template-columns: 1fr;
    grid-template-rows: 150px 450px;
    width: 611px;
    margin: 0 auto;
    grid-gap: 36px;
  }
`;
export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 611px;
`;
export const Logo = styled.img`
  width: 450px;
  height: 450px;

  @media (max-width: 999px) {
    width: 100px;
    height: 100px;
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
    margin-left: -15px;
  }
`;
export const HomeHeading1 = styled.h1`
  font-size: 50px;
`;
export const Heading4 = styled.h4`
  font-size: 24px;
  margin-top: 0;
`;
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
`;

export const Button = styled.button`
  width: 100%;
  height: 42px;
  font-size: 16px;
  font-family: "Roboto";
  border-radius: 80px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &.kakao {
    background-color: white;
    color: #3c4043;
    margin-bottom: 12px;
  }

  &.create {
    background-color: #1d9bf0;
    color: white;
    margin: 12px 0 8px;
  }

  &.sign-in {
    background-color: transparent;
    color: #1d9bf0;
    border: 1px solid #536471;
    font-weight: bold;
    &:hover,
    &:focus {
      background-color: rgba(29, 155, 240, 0.3);
    }
  }
  &:hover,
  &:focus {
    transition: 0.1s;
    filter: grayscale(20%);
  }
`;

export const OrSpan = styled.span`
  font-size: 16px;
  color: #e7e9ea;
`;

export const InfoText = styled.p`
  font-size: 12px;
  text-align: left;
  color: #71767b;
  margin: 0 0 48px 0;
  margin-top: ${({ $marginTop }) => ($marginTop ? $marginTop : 0)};
  a {
    color: #1d9bf0;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const AlreadyAccount = styled.span`
  text-align: left;
  margin-bottom: 16px;
  font-size: 18px;
`;

export const KakaoIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 12px;
`;
export const SignInInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 46px;
  border: 1px solid #808080;
  color: white;
  padding: 0 8px;
  font-size: 16px;
  background-color: transparent;
  margin-top: 12px;
  border-radius: 4px;
  &::placeholder {
    color: #71767b;
  }
`;
export const ButtonContainer = styled.div`
  margin-top: 18px;
`;
export const ActionButton = styled.button`
  width: 100%;
  height: 38px;
  font-weight: bold;
  border: 1px solid #dadce0;
  border-radius: 810px;
  margin-bottom: 8px;
  font-size: 15px;
  cursor: pointer;
  font-family: "Roboto";
  background-color: transparent;
  color: white;
  &:hover,
  &:focus {
    transition: 0.1s;
    background-color: white;
    color: black;
  }
`;

export const ActionText = styled.p`
  margin-top: ${({ $noMarginTop }) => ($noMarginTop ? "0" : "58px")};
  color: #71767b;
  text-align: left;
`;

export const ActionLink = styled(Link)`
  color: #1d9bf0;
  cursor: pointer;
  text-decoration: none;
`;
export const NavList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  margin-left: 32px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 210px;
  li {
    font-size: 24px;
    color: white;
    font-family: Roboto;
    list-style: none;
    display: flex;
    align-items: center;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  svg {
    margin-right: 12px;
  }
  &:hover,
  &:focus {
    transition: 0.1s;
    color: #bbe1fa;
  }
  &.active {
    color: #808080;
  }
`;
export const NavContainer = styled.div`
  min-width: 275px;
  border-right: 0.5px solid lightgray;
`;

export const NavLogo = styled.img`
  display: block;
  margin-left: 8px;
`;

export const DashboardContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  background-color: black;
  background-size: cover;
  overflow: auto;
`;
export const StockChartsSectionContainer = styled.div`
  width: 880px;
  height: 153px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
export const ChartContainer = styled.div`
  color: white;
  width: 188px;
`;

export const StockDetail = styled.div`
  display: flex;
  align-items: center;
`;

export const StockTitle = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const PriceDetail = styled.span`
  display: inline-block;
  margin-left: 16px;
`;
export const DashboardContent = styled.div`
  padding: 30px 50px;
`;
export const SectionTitle = styled.h2`
  text-align: left;
  color: white;
`;
export const ListSectionContainer = styled.div`
  width: 702px;
  display: flex;
  flex-direction: column;
`;

export const ButtonListContainer = styled.ul`
  list-style: none;
  width: 395px;
  display: flex;
  padding: 0;
  justify-content: space-between;
  margin: 0 0 20px 0;
`;

export const ListButton = styled.select`
  padding: 6px 4px 6px 8px;
  border-radius: 40px;
  height: 38px;
  font-weight: bold;
  font-family: Roboto;
  color: black;
  font-size: 18px;
  border-color: transparent;
  background-color: rgba(211, 211, 211, 0.8);
  &:hover,
  &:focus {
    transition: 0.1s;
    color: white;
  }
  option {
    font-size: 18px;
    color: black;
    text-align: left;
    padding: 0 4px;
    font-weight: bold;
  }
`;

export const TraderListContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const TraderProfile = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOdd",
})`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border: 1px solid #0f4c75;
  background-color: ${(props) => (props.isOdd ? "#BBE1FA" : "white")};
`;
export const TraderImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  color: white;
  font-family: Roboto;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;
  margin: 0 2px;

  &:hover {
    transition: 0.3s;
    background-color: rgba(255, 255, 255, 0.7);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
  }
  &.active {
    background-color: rgba(105, 105, 105, 0.8);
  }
`;
export const BadgeContainer = styled.div`
  display: flex;
  width: 170px;
  height: 28px;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
`;
export const Badge = styled.span`
  background-color: #0096ff;
  padding: 0 8px;
  border-radius: 16px;
  color: white;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: 600;
`;
export const TraderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
`;
export const SkeletonContainer = styled.div`
  display: flex;
`;
export const MyAccountTitle = styled.h1`
  text-align: left;
  color: white;
  margin-bottom: 32px;
`;
export const ProfileSection = styled.div`
  display: flex;
  width: 800px;
  align-items: center;
`;
export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 360px;
`;
export const UserName = styled.span`
  color: #a0c6fa;
  font-weight: bold;
  font-size: 24px;
`;
export const BalanceText = styled.p`
  font-size: 18px;
  color: white;
  margin: 0;
`;
export const DetailButton = styled.button`
  color: #a0c6fa;
  background-color: white;
  height: 44px;
  width: 100px;
  border-color: transparent;
  border-radius: 4px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;
export const AmountSection = styled.div`
  display: flex;
  font-size: 60px;
  font-weight: bold;
  color: white;
  align-items: center;
`;

export const DynamicAmountInput = styled.input`
  background-color: transparent;
  font-size: 80px;
  font-weight: bold;
  width: 250px;
  border: none;
  color: white;
  margin-left: 4px;
  outline: none;
  margin-right: 75px;
`;

export const AmountInputSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AmountInput = styled.input`
  background-color: transparent;
  height: 40px;
  border: 1px solid #808080;
  color: #808080;
  padding: 0 6px;
  border-radius: 4px;
  width: 310px;
  font-size: 14px;
  margin: 4px 0;
`;

export const MinAmountText = styled.p`
  margin: 0;
  color: ${({ $color }) => $color};
  font-size: 16px;
  text-align: left;
  font-weight: normal;
`;

export const AmountTitle = styled.span`
  font-weight: bold;
  font-size: 24px;
  text-align: left;
`;
