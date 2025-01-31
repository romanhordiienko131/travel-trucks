import s from "./LocationFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLocationFilter } from "../../redux/filters/selectors";
import { setLocation } from "../../redux/filters/slice";

const LocationFilter = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocationFilter);

  function handleChange(event) {
    dispatch(setLocation(event.target.value));
  }

  return (
    <input
      className={s.input}
      name="location"
      placeholder="City"
      value={location}
      onChange={handleChange}
    />
  );
};

export default LocationFilter;
