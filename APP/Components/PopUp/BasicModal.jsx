import Modal from "react-native-modal";

const BasicModal = ({ isVisible = false, children }) => {
  return <Modal isVisible={isVisible}>{children}</Modal>;
};

export default BasicModal;
