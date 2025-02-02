import s from "./CamperRating.module.css";

const CamperRating = ({ rating, reviews }) => {
  return (
    <div className={s.ratingWrapper}>
      <img src="/svg/star.svg" alt="Star" width={16} height={16} />
      <p>
        {rating} ({reviews.length} Reviews)
      </p>
    </div>
  );
};

export default CamperRating;
