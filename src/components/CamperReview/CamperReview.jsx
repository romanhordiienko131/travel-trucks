import s from "./CamperReview.module.css";

const CamperReview = ({ review }) => {
  function generateStars(rating) {
    const stars = [];

    for (let i = 0; i < rating; i += 1) {
      stars.push(
        <img
          key={`yellow-${i}`}
          src="/svg/star.svg"
          alt="Star"
          width={16}
          height={16}
        />
      );
    }

    for (let i = rating; i < 5; i += 1) {
      stars.push(
        <img
          key={`gray-${i}`}
          src="/svg/star-gray.svg"
          alt="Star"
          width={16}
          height={16}
        />
      );
    }

    return stars;
  }

  return (
    <div className={s.review}>
      <div className={s.author}>
        <span className={s.avatar}>{review.reviewer_name.charAt(0)}</span>
        <div className={s.nameRatingWrapper}>
          <p className={s.name}>{review.reviewer_name}</p>
          <div className={s.stars}>{generateStars(review.reviewer_rating)}</div>
        </div>
      </div>
      <p className={s.comment}>{review.comment}</p>
    </div>
  );
};

export default CamperReview;
