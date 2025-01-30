import { useEffect } from "react";
import s from "./CatalogPage.module.css";
import { useDispatch } from "react-redux";
import { getAllCampers } from "../../redux/campers/operations";
import Container from "../../components/Container/Container";
import CamperList from "../../components/CamperList/CamperList";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <>
      <Container>
        <div className={s.wrapper}>
          <div>Placeholder for future content</div>
          <CamperList />
        </div>
      </Container>
    </>
  );
};

export default CatalogPage;
