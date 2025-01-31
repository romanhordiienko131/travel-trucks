import s from "./VehicleEquipmentFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectVehicleEquipmentFilters } from "../../redux/filters/selectors";
import { toggleEquipment } from "../../redux/filters/slice";

const VehicleEquipmentFilter = () => {
  const dispatch = useDispatch();
  const vehicleEquipment = useSelector(selectVehicleEquipmentFilters);

  function getIcon(name) {
    let icon = "";

    switch (name) {
      case "AC":
        icon = "/svg/wind.svg";
        break;
      case "automatic":
        icon = "/svg/diagram.svg";
        break;
      case "kitchen":
        icon = "/svg/cup-hot.svg";
        break;
      case "TV":
        icon = "/svg/tv.svg";
        break;
      case "bathroom":
        icon = "/svg/shower.svg";
    }

    return icon;
  }

  function handleChange(event) {
    dispatch(toggleEquipment(event.target.value));
  }

  return (
    <div>
      <h3 className={s.heading}>Vehicle equipment</h3>
      <hr className={s.line} />
      <div className={s.list}>
        {Object.keys(vehicleEquipment).map((equipment) => (
          <div className={s.box} key={equipment}>
            <input
              className={s.checkbox}
              type="checkbox"
              name="equipment"
              value={equipment}
              checked={vehicleEquipment[equipment]}
              onChange={handleChange}
            />
            <div className={s.iconNameWrapper}>
              <img
                className={s.icon}
                src={getIcon(equipment)}
                alt={equipment}
                width={32}
                height={32}
              />
              <p className={s.name}>{equipment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipmentFilter;
