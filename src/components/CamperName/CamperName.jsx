import s from "./CamperName.module.css";

const CamperName = ({ name }) => {
  return <h2 className={s.name}>{name}</h2>;
};

export default CamperName;
