import useProfileImg from "../../img/userProfile.png";
import {
  ProfileImg,
  ProfileSection,
  UserInfo,
  UserName,
  BalanceText,
  DetailButton,
} from "../../style/StyledComponents";
export default function ProfileArea() {
  return (
    <ProfileSection>
      <ProfileImg src={useProfileImg}></ProfileImg>
      <UserInfo>
        <UserName>littlewarrenbuffett666</UserName>
        <BalanceText>My account balance is ₩ 2,000</BalanceText>
      </UserInfo>
      <DetailButton>Detail</DetailButton>
    </ProfileSection>
  );
}
