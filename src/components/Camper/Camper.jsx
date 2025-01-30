import { Link } from "react-router-dom";
import EquipmentList from "../EquipmentList/EquipmentList";
import s from "./Camper.module.css";

const Camper = ({
  id,
  imageUrl,
  name,
  price,
  rating,
  reviews,
  location,
  description,
}) => {
  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img className={s.image} src={imageUrl} alt="Camper" />
      </div>
      <div className={s.content}>
        <div>
          <div className={s.namePriceWrapper}>
            <h2 className={s.name}>{name}</h2>
            <div className={s.priceFavoriteWrapper}>
              <p className={s.price}>€{price}</p>
              <img src="/svg/heart.svg" alt="Heart" width={26} height={24} />
            </div>
          </div>
          <div className={s.ratingLocationWrapper}>
            <div className={s.ratingWrapper}>
              <img src="/svg/star.svg" alt="Star" width={16} height={16} />
              <p className={s.rating}>
                {rating} ({reviews.length} Reviews)
              </p>
            </div>
            <div className={s.locationWrapper}>
              <img src="/svg/map.svg" alt="Map" width={16} height={16} />
              <p>{location}</p>
            </div>
          </div>
        </div>
        <p className={s.description}>{description}</p>
        <div className={s.equipmentList}>
          <EquipmentList id={id} />
        </div>
        <Link className={s.link} to={`/catalog/${id}`}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default Camper;
