import s from "./CamperList.module.css";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import Camper from "../Camper/Camper";

const CamperList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul className={s.list}>
      {campers.map(
        ({
          id,
          name,
          price,
          rating,
          location,
          description,
          gallery,
          reviews,
        }) => (
          <li key={id}>
            <Camper
              id={id}
              name={name}
              price={price}
              rating={rating}
              location={location}
              description={description}
              imageUrl={gallery[0].thumb}
              reviews={reviews}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default CamperList;
