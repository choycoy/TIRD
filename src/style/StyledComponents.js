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
  width: 550px;
  padding-bottom: 60px;
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
  margin-bottom: ${({ $formType }) => ($formType === "signInWithNoKakao" ? "0" : "")};
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
  padding: 60px;
  height: 100vh;
`;
export const GridContainer = styled.div`
  color: white;
  display: grid;
  justify-items: center;
  width: 80%;
  margin: 150px auto 0 auto;

  @media (min-width: 1000px) {
    grid-template-columns: 450px 1fr;
  }

  @media (max-width: 999px) {
    grid-template-columns: 1fr;
    grid-template-rows: 150px 450px;
    margin: 0 auto 30px auto;
    grid-gap: 36px;
    justify-items: start;
  }
`;
export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  text-align: left;
  white-space: nowrap;
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
export const TotalText = styled.p`
  font-size: 64px;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 32px;
  margin-right: 4px;
  span {
    display: inline-block;
    margin-right: 6px;
  }
`;
export const TopUpBtn = styled.button`
  width: 120px;
  height: 50px;
  font-weight: bold;
  color: white;
  background-color: #3282b8;
  border-color: transparent;
  border-radius: 4px;
  font-size: 24px;
`;
export const DetailInfo = styled.p`
  color: white;
  font-weight: bold;
  text-align: left;
  margin-top: 0;
`;
export const DetailSection = styled.div`
  padding: 44px 25px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const IntroductionText = styled.p`
  background-color: rgba(223, 223, 223, 0.39);
  font-size: 18px;
  padding: 16px;
  color: black;
  text-align: left;
  height: 228px;
  border-radius: 8px;
  margin: 8px 16px 16px 16px;
`;
export const FollownBtn = styled.button`
  width: 110px;
  height: 48px;
  background-color: #bbe1fa;
  font-weight: bold;
  font-size: 18px;
  border-color: transparent;
  border-radius: 8px;
  cursor: pointer;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  margin: 30px 131px 80px 131px;
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
  border: ${({ $border }) => ($border ? "#1px solid #0f4c75" : "none")};
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
  position: relative;
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
`;
export const UserName = styled.span`
  color: #a0c6fa;
  font-weight: bold;
  font-size: 24px;
  text-align: left;
`;
export const BalanceText = styled.p`
  font-size: 18px;
  color: white;
  margin: 0;
  text-align: left;
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
  position: absolute;
  right: 0;
`;
export const AmountSection = styled.div`
  display: flex;
  font-size: 60px;
  font-weight: bold;
  color: white;
  align-items: center;
  margin-top: 40px;
  position: relative;
  max-width: 800px;
`;

export const DynamicAmountInput = styled.input`
  background-color: transparent;
  font-size: 80px;
  font-weight: bold;
  border: none;
  color: white;
  margin-left: 4px;
  outline: none;
  margin-right: 75px;
`;

export const AmountInputSection = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
`;

export const AmountInput = styled.input`
  background-color: transparent;
  height: 40px;
  border: 1px solid #808080;
  color: #808080;
  padding: 0 6px;
  border-radius: 4px;
  width: 260px;
  font-size: 18px;
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
export const PointSection = styled.div`
  width: 395px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;
export const PointTitle = styled.p`
  color: #a0c6fa;
  font-weight: bold;
  font-size: 24px;
  margin-top: 0;
  text-align: left;
`;
export const AvailablePointsSection = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-between;
  margin-bottom: 12px;
`;
export const AvailablePointsTitle = styled.span`
  font-weight: bold;
  color: white;
  font-size: 20px;
  display: inline-block;
`;
export const PointInput = styled.input`
  background-color: transparent;
  height: 40px;
  border: 1px solid #808080;
  color: #808080;
  padding: 0 6px;
  border-radius: 4px;
  text-align: left;
  margin: 4px 0;
  width: 300px;
  font-size: 16px;
  box-sizing: border-box;
`;
export const PointInputSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ApplyBtn = styled.button`
  width: 75px;
  height: 40px;
  background-color: white;
  color: #a0c6fa;
  font-weight: bold;
  font-size: 18px;
  border-color: transparent;
  border-radius: 4px;
  cursor: pointer;
`;
export const TopUpSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
export const ChargeSection = styled.div`
  padding: 30px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 0;
`;
export const ChargeBtn = styled.button`
  height: 26px;
  border-radius: 4px;
  background-color: #0096ff;
  color: white;
  border-color: transparent;
  display: inline-block;
  margin-left: 8px;
  padding: 0 6px;
  font-family: Roboto;
  cursor: pointer;
`;
export const ChargeInput = styled.input`
  height: 34px;
  background-color: rgba(223, 223, 223, 0.39);
  border-color: transparent;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 4px;
  margin-right: 8px;
  outline: none;
  font-weight: bold;
`;
export const RequirementText = styled.p`
  color: red;
  text-align: left;
  font-size: 14px;
  margin: 0;
`;
export const AlertModalContainer = styled(Modal)`
  width: 220px;
  height: 110px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
`;

export const SendBtn = styled.button`
  color: black;
  background-color: #faffaf;
  font-weight: bold;
  font-family: Roboto;
  border-color: transparent;
  border-radius: 4px;
  height: 30px;
  padding-top: 0;
  padding-bottom: 0;
  cursor: pointer;
`;
export const BackBtn = styled.button`
  background-color: rgba(128, 128, 128, 0.62);
  color: white;
  font-size: 12px;
  height: 24px;
  position: absolute;
  right: 24px;
  bottom: 18px;
  border-radius: 4px;
  font-family: Roboto;
  padding: 0 8px;
  cursor: pointer;
  border: transparent;
`;
export const BalanceText2 = styled.p`
  color: #d3d3d3;
  text-align: left;
  margin: 8px 0;
  font-size: 16px;
`;
export const PINModalContainer = styled(Modal)`
  width: 300px;
  height: 270px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
`;

export const PINInput = styled.input`
  width: 30px;
  height: 30px;
  margin: 3px;
  border-radius: 4px;
  border-color: transparent;
  overflow: hidden;
  font-size: 24px;
  text-align: center;
  outline: none;
  font-family: Roboto;
`;

export const NumberButton = styled.button`
  width: 35px;
  height: 25px;
  margin: 2px;
  font-family: Roboto;
  font-size: 18px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: transparent;
  color: white;
  &:hover {
    background-color: #e0e0e0;
    color: black;
  }
`;

export const ButtonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 16px;
  width: 200px;
`;
