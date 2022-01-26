import styled, { css } from "styled-components";

// We don't want to tie the DOM element to each styles
// There may be times we require a header style but should not be forced to use a H1 for instance
const DynamicTypography = ({ children, tag = "p", ...props }) => {
  return <div {...props}>{children}</div>;
};

const BaseStyle = css`
  font-family: "Sora";
`;

const variantStyles = (theme, variant) =>
  ({
    1: css`
      color: white;
      font-size: 18px;
      @media (max-width: 768px) {
        font-size: 16px;
      }
    `,
    2: css`
      color: white;
      font-size: 16px;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    `,
    6: css`
      color: #000c2d;
      font-size: 16px;
      font-weight: 500;
    `,
    label: css`
      color: gray;
      font-size: 12px;
    `,
    inputError: css`
      color: #e76e55;
      font-size: 12px;
    `,
  }[variant]);

const Body = styled(DynamicTypography)`
  ${BaseStyle};
  ${({ theme, variant }) => variantStyles(theme, variant)}
`;

export default Body;
