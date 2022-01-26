import { useLayoutEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Ghost } from "react-kawaii";

const GhostAvatar = ({ isDirty, isValid, mood, className }) => {
  const [x] = useWindowSize();
  console.log(x);
  return (
    <StyledGhost size={x <= 768 ? 100 : 230} mood={mood} color="#596881" className={className} />
  );
};

const breatheAnimation = keyframes`
0% {

    transform: translatey(0px);
}
50% {

    transform: translatey(-10px);
}
100% {

    transform: translatey(0px);
}
`;

const StyledGhost = styled(Ghost)`
  margin-top: 10px;
  animation-name: ${breatheAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;

export default GhostAvatar;

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
