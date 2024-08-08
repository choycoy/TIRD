import useProfileImg from "../../img/userProfile.png";
import {
  ProfileImg,
  ProfileSection,
  UserInfo,
  UserName,
  BalanceText,
  DetailButton,
} from "../../style/StyledComponents";
import { useUser } from "../UserContext";

export default function ProfileArea() {
  const { user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  console.log(user);

  return (
    <ProfileSection>
      <ProfileImg src={useProfileImg}></ProfileImg>
      <UserInfo>
        <UserName>{user.nickname}</UserName>
        <BalanceText>My account balance is ₩ {formatNumber(user.balance)}</BalanceText>
      </UserInfo>
      <DetailButton>Detail</DetailButton>
    </ProfileSection>
  );
}
