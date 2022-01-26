import { useRef, useEffect } from "react";
import styled from "styled-components";

const Modal = ({ children, isOpen, onClickOutside, className }) => {
  const innerRef = useOuterClick((e) => {
    if (isOpen) {
      onClickOutside && onClickOutside();
    }
  });
  return (
    <ModalOverlay
      id="defaultModal"
      isOpen={isOpen}
      className="flex justify-center items-center"
    >
      <div ref={innerRef} className={`relative`} style={{ zIndex: 1000 }}>
        <div
          className={`relative bg-white rounded-lg shadow dark:bg-gray-700 px-10 py-8  ${className}`}
        >
          {children}
        </div>
      </div>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  height: 100vh;
  display: ${(props) => (props.isOpen ? `flex` : `none`)};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.85);

  transition: opacity 0.2s ease;
  opacity: ${(props) => (props.isOpen ? `2` : `0`)};
`;

export default Modal;

// Shameless plug from stackoverflow
function useOuterClick(callback) {
  const innerRef = useRef();
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
    }
  }, []);

  return innerRef;
}
