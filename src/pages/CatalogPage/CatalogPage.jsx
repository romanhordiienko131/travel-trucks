import { useEffect } from "react";
import s from "./CatalogPage.module.css";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import Container from "../../components/Container/Container";
import CamperList from "../../components/CamperList/CamperList";
import Filters from "../../components/Filters/Filters";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <Container>
      <div className={s.container}>
        <Filters />
        <CamperList />
      </div>
    </Container>
  );
};

export default CatalogPage;
