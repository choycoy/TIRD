import logo from "../img/logo-white.png";
import { ModalOverlay, Modal, ModalContent, CloseButton } from "../style/StyledComponents";

export default function ModalPage({ onClose, children, formType }) {
  return (
    <ModalOverlay>
      <Modal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <img src={logo} alt="TIRD" width="100px" height="100px" />
        <ModalContent $formType={formType}>{children}</ModalContent>
      </Modal>
    </ModalOverlay>
  );
}
