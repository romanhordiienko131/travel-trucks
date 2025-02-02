import s from "./CamperLocation.module.css";

const CamperLocation = ({ location }) => {
  return (
    <div className={s.locationWrapper}>
      <img src="/svg/map.svg" alt="Map" width={16} height={16} />
      <p>{location}</p>
    </div>
  );
};

export default CamperLocation;
