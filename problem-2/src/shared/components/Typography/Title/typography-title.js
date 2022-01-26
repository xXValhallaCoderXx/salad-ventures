// import safeObject from "shared/utils/safe-object";
import styled, { css } from "styled-components";

// const TAG_MAP = safeObject(
//   {
//     1: "h1",
//     2: "h2",
//   },
//   "h1"
// );

const DynamicTypography = ({ children, ...props }) => {
  // const variant = props.variant || "h1";
  return <div {...props}>{children}</div>;
};

const BaseStyle = css`
  font-family: "Tung";
  color: white;
`;

const variantStyles = (theme, variant) =>
  ({
    1: css`
      font-size: 120px;
      @media (max-width: 768px) {
        font-size: 60px;
      }
    `,
    2: css`
      font-size: 80px;
      @media (max-width: 768px) {
        font-size: 50px;
      }
    `,
    6: css`
      font-size: 30px;
      letter-spacing: 1.3px;
    `,
  }[variant]);

const Title = styled(DynamicTypography)`
  ${BaseStyle};
  ${({ theme, variant }) => variantStyles(theme, variant)}
`;

export default Title;
