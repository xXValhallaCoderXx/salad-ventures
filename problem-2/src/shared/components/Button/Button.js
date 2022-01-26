import safeObject from "shared/utils/safe-object";

const TAG_MAP = safeObject(
  {
    primary: "primary",
    success: "success",
  },
  "primary"
);

const TYPE_MAP = safeObject(
  {
    button: "button",
    submit: "submit",
  },
  "button"
);

const Button = ({
  variant = "primary",
  label,
  onClick,
  type = "button",
  block,
  className,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={TYPE_MAP[type]}
      disabled={disabled}
      className={`nes-btn is-${TAG_MAP[variant]} ${
        block && "w-full"
      } ${className}  ${disabled && "is-disabled"}`}
    >
      {label}
    </button>
  );
};

export default Button;
