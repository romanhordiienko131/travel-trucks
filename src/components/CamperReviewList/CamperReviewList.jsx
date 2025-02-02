import s from "./CamperReviewList.module.css";
import CamperReview from "../CamperReview/CamperReview";

const CamperReviewList = ({ reviews }) => {
  return (
    <div>
      <ul className={s.list}>
        {reviews.map((review, index) => (
          <li key={index}>
            <CamperReview review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperReviewList;
