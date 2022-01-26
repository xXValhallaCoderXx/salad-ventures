import Modal from "shared/components/Modal";
import styled from "styled-components";
import Title from "shared/components/Typography/Title";
import Body from "shared/components/Typography/Body";
import Button from "../../../shared/components/Button";
import { CreditCard } from "react-kawaii";

const SuccessModal = ({ isOpen, onClickOutside, onClick }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onClickOutside={onClickOutside}
      className="flex justify-center flex-col items-center"
    >
      <Title variant="2">Transaction Success!</Title>
      <CreditCard size={100} mood="excited" color="#596881" />
      <Body className="text-center mt-4 mb-4" variant="2">
        Your transaction should
        <br /> arrive soon!
      </Body>
      <Button label="Back to home" onClick={onClick} />
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  background-color: #000c2d;
`;

export default SuccessModal;
