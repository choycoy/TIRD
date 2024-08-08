import { TraderProfile, TraderImg, TraderInfo, BadgeContainer, Badge } from "../../style/StyledComponents";

export default function TraderProfileComponent({ isOdd, onClick, trader, images, border }) {
  const fallbackImage = "fallbackimg.png";

  const handleClick = () => {
    onClick(trader);
  };

  return (
    <TraderProfile key={trader.nickname} isOdd={isOdd} onClick={handleClick}>
      <TraderImg src={images[trader.nickname] || fallbackImage} alt={trader.nickname} />
      <TraderInfo>
        <span style={{ fontWeight: "bold", fontSize: "14px", color: "black" }}>{trader.nickname}</span>
        <p style={{ margin: 0, fontSize: "18px", color: "#696969" }}>{trader.saying}</p>
      </TraderInfo>
      <BadgeContainer>
        <Badge>{trader.option}</Badge>
        <Badge>⭐{trader.rating}</Badge>
        <Badge>{trader.followers}k</Badge>
      </BadgeContainer>
    </TraderProfile>
  );
}
