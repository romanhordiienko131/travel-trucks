import s from "./VehicleTypeFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectVehicleTypeFilter } from "../../redux/filters/selectors";
import { setVehicleType } from "../../redux/filters/slice";

const VehicleTypeFilter = () => {
  const dispatch = useDispatch();
  const vehicleType = useSelector(selectVehicleTypeFilter);

  function handleChange(event) {
    dispatch(setVehicleType(event.target.value));
  }

  return (
    <div>
      <h3 className={s.heading}>Vehicle equipment</h3>
      <hr className={s.line} />
      <div className={s.list}>
        <div className={s.box}>
          <input
            className={s.radio}
            type="radio"
            name="equipment"
            value="panelTruck"
            checked={vehicleType === "panelTruck"}
            onChange={handleChange}
          />
          <div className={s.iconNameWrapper}>
            <img className={s.icon} src="/svg/grid-1x2.svg" alt="1x2 grid" />
            <p className={s.name}>Van</p>
          </div>
        </div>
        <div className={s.box}>
          <input
            className={s.radio}
            type="radio"
            name="equipment"
            value="fullyIntegrated"
            checked={vehicleType === "fullyIntegrated"}
            onChange={handleChange}
          />
          <div className={s.iconNameWrapper}>
            <img className={s.icon} src="/svg/grid-2x2.svg" alt="2x2 grid" />
            <p className={s.name}>Fully Integrated</p>
          </div>
        </div>
        <div className={s.box}>
          <input
            className={s.radio}
            type="radio"
            name="equipment"
            value="alcove"
            checked={vehicleType === "alcove"}
            onChange={handleChange}
          />
          <div className={s.iconNameWrapper}>
            <img className={s.icon} src="/svg/grid-3x3.svg" alt="3x3 grid" />
            <p className={s.name}>Alcove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleTypeFilter;
