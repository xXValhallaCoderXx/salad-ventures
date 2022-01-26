import { forwardRef } from "react";
import Body from "../Typography/Body";
const Input = forwardRef(
  (
    {
      placeholder,
      label,
      id,
      type = "text",
      onChange,
      value,
      error,
      className,
      helperText,
      disabled,
      ...rest
    },
    ref
  ) => {
    /* Normally would split these into smaller components - then into a FormController */
    return (
      <div className={`${className} nes-field`}>
        {label && (
          <Body variant="6" htmlFor={id}>
            {label}
          </Body>
        )}
        <input
          ref={ref}
          type={type}
          id={id}
          disabled={disabled}
          className={`nes-input ${error && "is-error"} ${
            disabled && "input-disabled"
          }`}
          placeholder={placeholder}
          {...rest}
        />
        <div className="pl-1 mt-2">
          {helperText && <Body variant="label">{helperText}</Body>}
        <div style={{height: 12}}>  {error && <Body variant="inputError">{error}</Body>}</div>
        </div>
      </div>
    );
  }
);

export default Input;
