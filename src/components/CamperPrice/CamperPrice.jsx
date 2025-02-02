import s from "./CamperPrice.module.css";

const CamperPrice = ({ price }) => {
  return <p className={s.price}>€{price}</p>;
};

export default CamperPrice;
