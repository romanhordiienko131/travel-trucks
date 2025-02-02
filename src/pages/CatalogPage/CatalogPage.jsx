import { useEffect } from "react";
import s from "./CatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import Container from "../../components/Container/Container";
import CamperList from "../../components/CamperList/CamperList";
import Filters from "../../components/Filters/Filters";
import { selectLoading } from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <Container>
      <div className={s.container}>
        <Filters />
        {isLoading ? <Loader /> : <CamperList />}
      </div>
    </Container>
  );
};

export default CatalogPage;
