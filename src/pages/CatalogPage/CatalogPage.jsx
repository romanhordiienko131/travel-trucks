import { useEffect } from "react";
import s from "./CatalogPage.module.css";
import { useDispatch } from "react-redux";
import { getCampers } from "../../redux/campers/operations";
import Container from "../../components/Container/Container";
import CamperList from "../../components/CamperList/CamperList";
import Filters from "../../components/Filters/Filters";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <>
      <Container>
        <div className={s.wrapper}>
          <Filters />
          <CamperList />
        </div>
      </Container>
    </>
  );
};

export default CatalogPage;
