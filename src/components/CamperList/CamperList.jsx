import s from "./CamperList.module.css";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import Camper from "../Camper/Camper";

const CamperList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul className={s.list}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <Camper camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
