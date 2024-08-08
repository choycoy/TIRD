import { useState, useEffect } from "react";
import { TraderListContainer } from "../../style/StyledComponents";
import TraderDetailModal from "./TraderDetailModal";
import TraderProfileComponent from "./TraderProfileComponent";

export default function TraderList({ currentItems }) {
  const [images, setImages] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedTrader, setSelectedTrader] = useState(null);
  const [infoText, setInfoText] = useState("");
  const fallbackImage = "fallbackimg.png";

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

  const handleTraderClick = (trader) => {
    setSelectedTrader(trader);
    setShowModal(true);
    setInfoText(trader.infoText);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTrader(null);
  };

  return (
    <>
      <TraderListContainer>
        {currentItems.map((trader, index) => (
          <TraderProfileComponent
            isOdd={index % 2 !== 0}
            onClick={handleTraderClick}
            trader={trader}
            key={trader.nickname}
            images={images}
            $border={true}
          />
        ))}
      </TraderListContainer>
      {showModal && (
        <TraderDetailModal trader={selectedTrader} onClose={handleCloseModal} images={images} infoText={infoText} />
      )}
    </>
  );
}
