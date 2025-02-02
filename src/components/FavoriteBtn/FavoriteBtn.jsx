import s from "./FavoriteBtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/campers/slice";
import { selectFavorites } from "../../redux/campers/selectors";

const FavoriteBtn = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((favorite) => favorite.id === camper.id);

  function handleFavorite() {
    dispatch(toggleFavorite(camper));
  }

  return (
    <button className={s.button} onClick={handleFavorite}>
      {isFavorite ? (
        <img src="/svg/heart-red.svg" alt="Heart" width={26} height={24}></img>
      ) : (
        <img src="/svg/heart.svg" alt="Heart" width={26} height={24} />
      )}
    </button>
  );
};

export default FavoriteBtn;
