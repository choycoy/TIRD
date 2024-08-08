import {
  ModalOverlay,
  Modal,
  CloseButton,
  DetailSection,
  IntroductionText,
  FollownBtn,
} from "../../style/StyledComponents";
import TraderProfileComponent from "./TraderProfileComponent";
import FollowModal from "../follow/FollowModal";
import { useState } from "react";

export default function TraderDetailModal({ onClose, trader, images, infoText }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <ModalOverlay>
      <Modal style={{ backgroundColor: "white", width: "730px", height: "458px" }}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <DetailSection>
          <TraderProfileComponent trader={trader} images={images} $border={false} />
          <IntroductionText>{infoText}</IntroductionText>
          <FollownBtn onClick={() => setShowModal(true)}>follow</FollownBtn>
          {showModal && <FollowModal onClose={setShowModal} />}
        </DetailSection>
      </Modal>
    </ModalOverlay>
  );
}
