import { useSelector } from "react-redux";
import EquipmentList from "../EquipmentList/EquipmentList";
import s from "./CamperFeatures.module.css";
import { selectCurrentCamper } from "../../redux/campers/selectors";

const CamperFeatures = () => {
  const camper = useSelector(selectCurrentCamper);

  function getCamperForm(form) {
    let output = "";

    switch (form) {
      case "fullyIntegrated":
        output = "Fully integrated";
        break;
      case "panelTruck":
        output = "Panel truck";
        break;
      default:
        output = form;
    }

    return output;
  }

  return (
    <div className={s.features}>
      <div className={s.equipmentList}>
        <EquipmentList camper={camper} />
      </div>

      <h3 className={s.heading}>Vehicle details</h3>
      <hr className={s.line} />
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.detail}>Form</p>
          <p className={s.detail}>{getCamperForm(camper.form)}</p>
        </li>
        <li className={s.item}>
          <p className={s.detail}>Length</p>
          <p className={s.detail}>{camper.length}</p>
        </li>
        <li className={s.item}>
          <p className={s.detail}>Width</p>
          <p className={s.detail}>{camper.width}</p>
        </li>
        <li className={s.item}>
          <p className={s.detail}>Height</p>
          <p className={s.detail}>{camper.height}</p>
        </li>
        <li className={s.item}>
          <p className={s.detail}>Tank</p>
          <p className={s.detail}>{camper.tank}</p>
        </li>
        <li className={s.item}>
          <p className={s.detail}>Consumption</p>
          <p className={s.detail}>{camper.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default CamperFeatures;
