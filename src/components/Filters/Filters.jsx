import s from "./Filters.module.css";
import LocationFilter from "../LocationFilter/LocationFilter";
import { useDispatch } from "react-redux";
import { getCampers } from "../../redux/campers/operations";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import VehicleEquipmentFilter from "../VehicleEquipmentFilter/VehicleEquipmentFilter";

const Filters = () => {
  const dispatch = useDispatch();

  function handleSearch() {
    dispatch(getCampers());
  }

  return (
    <div>
      <label className={s.location}>
        <p className={s.locationText}>Location</p>
        <LocationFilter />
      </label>
      <div className={s.filterList}>
        <p className={s.filtersText}>Filters</p>
        <VehicleEquipmentFilter />
        <VehicleTypeFilter />
      </div>
      <button className={s.button} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filters;
