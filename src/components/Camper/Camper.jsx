import { Link } from "react-router-dom";
import EquipmentList from "../EquipmentList/EquipmentList";
import s from "./Camper.module.css";
import CamperName from "../CamperName/CamperName";
import CamperRating from "../CamperRating/CamperRating";
import CamperLocation from "../CamperLocation/CamperLocation";
import CamperPrice from "../CamperPrice/CamperPrice";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";

const Camper = ({ camper }) => {
  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img className={s.image} src={camper.gallery[0].thumb} alt="Camper" />
      </div>
      <div className={s.content}>
        <div>
          <div className={s.namePriceWrapper}>
            <CamperName name={camper.name} />
            <div className={s.priceFavoriteWrapper}>
              <CamperPrice price={camper.price} />
              <FavoriteBtn camper={camper} />
            </div>
          </div>
          <div className={s.ratingLocationWrapper}>
            <CamperRating rating={camper.rating} reviews={camper.reviews} />
            <CamperLocation location={camper.location} />
          </div>
        </div>
        <p className={s.description}>{camper.description}</p>
        <div className={s.equipmentList}>
          <EquipmentList camper={camper} />
        </div>
        <Link target="_blank" className={s.link} to={`/catalog/${camper.id}`}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default Camper;
