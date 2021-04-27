import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CardNumberInput.module.scss";

const cx = classNames.bind(styles);

const CardNumberInput = ({ labelText, className, onCardInputChange }) => {
  const [cardNumberInput, setCardNumberInput] = useState({
    firstCardNumberInput: "",
    secondCardNumberInput: "",
    thirdCardNumberInput: "",
    fourthCardNumberInput: "",
  });

  const onCardNumberInputBlur = (event) => {
    const { value, name } = event.target;

    if (value.length !== 4) {
      return;
    }

    setCardNumberInput((state) => ({
      ...state,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (cardNumberInput.firstCardNumberInput.length === 4 && cardNumberInput.secondCardNumberInput.length === 4) {
      // 카드 타입 결정
    }

    if (Object.keys(cardNumberInput).every((key) => cardNumberInput[key].length === 4)) {
      onCardInputChange("cardNumber", {
        firstCardNumber: cardNumberInput.firstCardNumberInput,
        secondCardNumber: cardNumberInput.secondCardNumberInput,
        thirdCardNumber: cardNumberInput.thirdCardNumberInput,
        fourthCardNumber: cardNumberInput.fourthCardNumberInput,
      });
    }
  }, [cardNumberInput]);

  return (
    <div className={`${cx("card-number-input")} ${className}`}>
      {!!labelText?.length && (
        <label className={cx("card-number-input__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <div className={cx("card-number-input__input-wrapper")}>
        <input
          name={"firstCardNumberInput"}
          type="text"
          className={cx("card-number-input__input")}
          maxLength={4}
          onBlur={onCardNumberInputBlur}
          required
        />
        <span className={cx("card-number-input__input-seperator")}></span>
        <input
          name={"secondCardNumberInput"}
          type="text"
          className={cx("card-number-input__input")}
          maxLength={4}
          onBlur={onCardNumberInputBlur}
          required
        />
        <span className={cx("card-number-input__input-seperator")}></span>
        <input
          name={"thirdCardNumberInput"}
          type="password"
          className={cx("card-number-input__input", "card-number-input__input--dot")}
          maxLength={4}
          onBlur={onCardNumberInputBlur}
          required
        />
        <span className={cx("card-number-input__input-seperator")}></span>
        <input
          name={"fourthCardNumberInput"}
          type="password"
          className={cx("card-number-input__input", "card-number-input__input--dot")}
          maxLength={4}
          onBlur={onCardNumberInputBlur}
          required
        />
      </div>
      {cardNumberInput.firstCardNumberInput}
      {cardNumberInput.secondCardNumberInput}
      {cardNumberInput.thirdCardNumberInput}
      {cardNumberInput.fourthCardNumberInput}
    </div>
  );
};

export default CardNumberInput;
