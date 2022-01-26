import { useState, useEffect } from "react";
import Button from "shared/components/Button";
import Input from "shared/components/Input";

const FormSendTx = ({
  errors,
  register,
  handleSubmit,
  onSubmit,
  loading,
  success,
  isValid,
}) => {
  const [smsRequested, setSmsRequested] = useState(false);

  const onClickSendSms = () => {
    if (!smsRequested) {
      setSmsRequested(true);
    }
  };

  useEffect(() => {
    if (!loading) {
      setSmsRequested(false);
    }
  }, [loading]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="ETH Address"
        id="address"
        placeholder="Enter address"
        helperText="Make sure this is a mainnet address!"
        error={errors.address && errors.address.message}
        {...register("address")}
      />

      <Input
        label="Amount to send"
        id="amount"
        placeholder="Enter amount"
  
        className="mb-2 mt-2"
        error={errors.amount && errors.amount.message}
        {...register("amount")}
      />

      <div className="flex ">
        <div className="grow">
          <Input
            label="OTP Authentication"
            id="otp"
            disabled={!smsRequested}
            placeholder="Enter OTP"
            className="mb-2 pr-2 flex-1"
            error={errors.otp && errors.otp.message}
            {...register("otp")}
          />
        </div>
        <div className="pt-6 flex-1">
          {" "}
          <Button
            type="submit"
            label={`${smsRequested ? "Sent" : "Send SMS"}`}
            className="h-12 w-28"
            disabled={smsRequested}
            variant="success"
            onClick={onClickSendSms}
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        label={loading ? "Submitting..." : "Send Tokens"}
        block
        className="mt-5"
        disabled={(!smsRequested || loading) || !isValid}
      />
    </form>
  );
};

export default FormSendTx;
