import s from "./CamperDetailsPage.module.css";
import Container from "../../components/Container/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCamperById } from "../../redux/campers/operations";
import CamperName from "../../components/CamperName/CamperName";
import CamperRating from "../../components/CamperRating/CamperRating";
import CamperLocation from "../../components/CamperLocation/CamperLocation";
import CamperPrice from "../../components/CamperPrice/CamperPrice";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import CamperGallery from "../../components/CamperGallery/CamperGallery";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import clsx from "clsx";
import CamperReviewList from "../../components/CamperReviewList/CamperReviewList";
import BookingForm from "../../components/BookingForm/BookingForm";

const CamperDetailsPage = () => {
  const [section, setSection] = useState("features");

  const dispatch = useDispatch();
  const { camperId } = useParams();

  const camper = useSelector(selectCurrentCamper);

  useEffect(() => {
    dispatch(getCamperById(camperId));
  }, [camperId, dispatch]);

  function goToFeaturesSection() {
    setSection("features");
  }

  function goToReviewsSection() {
    setSection("reviews");
  }

  return (
    <Container>
      <div className={s.container}>
        <div className={s.basicInfo}>
          <div className={s.name}>
            <CamperName name={camper.name} />
          </div>
          <div className={s.ratingLocationWrapper}>
            <CamperRating rating={camper.rating} reviews={camper.reviews} />
            <CamperLocation location={camper.location} />
          </div>
          <CamperPrice price={camper.price} />
        </div>

        <div className={s.gallery}>
          <CamperGallery images={camper.gallery} />
        </div>
        <p className={s.description}>{camper.description}</p>
        <div>
          <ul className={s.sectionList}>
            <li className={s.sectionItem}>
              <button
                className={clsx(
                  s.sectionBtn,
                  section === "features" && s.currentSection
                )}
                onClick={goToFeaturesSection}
              >
                Features
              </button>
            </li>
            <li className={s.sectionItem}>
              <button
                className={clsx(
                  s.sectionBtn,
                  section === "reviews" && s.currentSection
                )}
                onClick={goToReviewsSection}
              >
                Reviews
              </button>
            </li>
          </ul>
          <hr className={s.divider} />
          <div className={s.sections}>
            {section === "features" ? (
              <CamperFeatures id={camperId} />
            ) : (
              <CamperReviewList reviews={camper.reviews} />
            )}
            <BookingForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CamperDetailsPage;
