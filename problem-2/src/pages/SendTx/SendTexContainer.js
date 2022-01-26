import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import Title from "shared/components/Typography/Title";
import Body from "shared/components/Typography/Body";
import Card from "shared/components/Card";
import FormSendTx from "./components/FormSendTx";
import Ghost from "./components/Ghost";
import SuccessModal from "./components/SuccessModal";
import isEmpty from "lodash.isempty";
import * as yup from "yup";

const schema = yup.object().shape({
  address: yup.string().required("Wallet address is required!"),
  amount: yup
    .string()
    .required("Please enter an amount to send")
    .matches("^[0-9]+$", "Numbers only"),
  otp: yup
    .string()
    .required("Please complete the OTP step")
    .matches("^[0-9]+$", "OTP should be numbers only"),
});

const SendTxContainer = () => {
  // Would prefer to use a reducer as there are computed values possible - but time constraint
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mood, setMood] = useState("happy");
  const [success, setSuccess] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onSubmit",
    mode: "onBlur",
  });

  useEffect(() => {
    // Not proud of this - but it works
    if (!isEmpty(errors)) {
      setMood("sad");
    } else if (isEmpty(errors) && isValid && loading) {
      setMood("lovestruck");
    } else {
      setMood("happy");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch(["address", "amount", "otp"])]);

  const onSubmit = (e) => {
    setMood("lovestruck");
    setLoading(true);

    setTimeout(() => {
      // Fake API
      setIsOpen(true);
    }, 2500);
  };

  const handleCloseModal = () => {
    reset();
    setLoading(false);
    setMood("happy");
    setIsOpen(false);
    setSuccess(true);
  };
  return (
    <div className="grid grid-cols-1">
      <div>
        <Title variant="1" className="text-center">
          SALAD VENTURES
        </Title>
        <Title
          variant="2"
          className="-mt-8 md:-mt-5 text-center hidden md:block"
        >
          Share Your Salad
        </Title>
      </div>
      <div className="flex justify-center md:mt-10">
        <div className="flex md:w-8/12 flex-col md:flex-row">
          <div className="basis-1/3 flex flex-col justify-center items-center">
            <Body variant="1" className="mb-1 order-1">
              Hi!
            </Body>

            <Ghost
              className="md:order-3 order-2"
              isValid={isValid}
              isDirty={isDirty}
              mood={mood}
            />
            <Body
              variant="2"
              className="text-center mb-4 mt-4: mt-0 md:order-2 order-3"
            >
              Send your <span className="font-semibold">$SALAD</span>
              &nbsp;to your friends!
            </Body>
          </div>
          <div className=" md:basis-1/3 flex md:justify-center">
            <StyledCard>
              <FormSendTx
                errors={errors}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                loading={loading}
                success={success}
                isValid={isValid}
              />
            </StyledCard>
          </div>
          <div className="basis-1/3"></div>
        </div>
      </div>
      <SuccessModal
        onClickOutside={handleCloseModal}
        isOpen={isOpen}
        onClick={handleCloseModal}
      />
    </div>
  );
};

const StyledCard = styled(Card)`
  width: 500px;
  @media (max-width: 768px) {
    width: 360px;
  }
`;

export default SendTxContainer;
