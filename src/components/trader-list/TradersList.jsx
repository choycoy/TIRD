import { useState, useEffect } from "react";
import {
  TraderListContainer,
  TraderProfile,
  TraderImg,
  TraderInfo,
  BadgeContainer,
  Badge,
} from "../../style/StyledComponents";
export default function TraderList({ currentItems }) {
  const fallbackImage = "fallbackimg.png";
  const [images, setImages] = useState({});

  useEffect(() => {
    currentItems.forEach((trader) => {
      checkImageExists(trader.profile)
        .then((url) => {
          setImages((prevImages) => ({ ...prevImages, [trader.nickname]: url }));
        })
        .catch(() => {
          setImages((prevImages) => ({ ...prevImages, [trader.nickname]: fallbackImage }));
        });
    });
  }, [currentItems]);

  const checkImageExists = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(url);
      img.onerror = () => reject();
    });
  };
  return (
    <TraderListContainer>
      {currentItems.map((trader, index) => (
        <TraderProfile key={trader.nickname} isOdd={index % 2 !== 0}>
          <TraderImg src={images[trader.nickname] || fallbackImage} alt={trader.nickname} />
          <TraderInfo>
            <span style={{ fontWeight: "bold", fontSize: "14px" }}>{trader.nickname}</span>
            <p style={{ margin: 0, fontSize: "18px", color: "#696969" }}>{trader.saying}</p>
          </TraderInfo>
          <BadgeContainer>
            <Badge>{trader.option}</Badge>
            <Badge>⭐{trader.rating}</Badge>
            <Badge>{trader.followers}k</Badge>
          </BadgeContainer>
        </TraderProfile>
      ))}
    </TraderListContainer>
  );
}
