import cardInfo from "../data/banks.json";

const preprocessing = (cardNumber) => {
  return cardNumber.replace(/[^0-9]/g, "").slice(0, 6);
};

export const processing = (cardNumber) => {
  cardNumber = preprocessing(cardNumber);
  const cardCompany = Object.keys(cardInfo).find((cardCompanyName) =>
    cardInfo[cardCompanyName]["bins"].some((binNumber) => cardNumber.includes(binNumber.replace(/[\s]/g, "")))
  );
  console.log(cardCompany);
};
