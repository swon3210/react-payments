import classNames from "classnames/bind";
import styles from "./CardInputContainer.module.scss";

import { INPUT_LABEL_TEXT, CARD_INPUT } from "../../constants";

import Input from "../../components/Input/Input";
import CardNumberInput from "../../components/CardNumberInput/CardNumberInput";
import GuideInput from "../../components/Input/GuideInput/GuideInput";
import TextLimitInput from "../../components/Input/TextLimitInput/TextLimitInput";
import InputBoxList from "../../components/InputBoxList/InputBoxList";

const cx = classNames.bind(styles);

const CardInputContainer = ({ cardNumberList, cardOwner, cardExpiration, cardCVC, cardPassword }) => {
  return (
    <form className={cx("card-input-container")}>
      {/* TODO: placeholder 추가 */}
      <CardNumberInput
        inputWidth="100%"
        key={INPUT_LABEL_TEXT.CARD_NUMBER}
        className={cx("card-input-container__number")}
        labelText={INPUT_LABEL_TEXT.CARD_NUMBER}
        value={cardNumberList}
      />
      <Input
        inputWidth="137px"
        placeholder={CARD_INPUT.EXPIRATION_PLACEHOLDER}
        key={INPUT_LABEL_TEXT.CARD_EXPIRATION}
        className={cx("card-input-container__expiration")}
        labelText={INPUT_LABEL_TEXT.CARD_EXPIRATION}
        value={cardExpiration}
      />
      <TextLimitInput
        inputWidth="100%"
        placeholder={CARD_INPUT.OWNER_PLACEHOLDER}
        lengthLimit={CARD_INPUT.OWNER_NAME_LENGTH_LIMIT}
        className={cx("card-input-container__owner")}
        labelText={INPUT_LABEL_TEXT.CARD_OWNER}
        value={cardOwner}
      />
      <GuideInput
        inputWidth="84px"
        className={cx("card-input-container__cvc")}
        labelText={INPUT_LABEL_TEXT.CARD_CVC}
        value={cardCVC}
      />
      <InputBoxList
        numbers={[1, 2]}
        dotCount={2}
        className={cx("card-input-container__password")}
        labelText={INPUT_LABEL_TEXT.CARD_PASSWORD}
        value={cardPassword}
      />
    </form>
  );
};

export default CardInputContainer;
