import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.background}>
      <div>
        <div className={s.titleWrapper}>
          <h1 className={s.title}>Campers of your dreams</h1>
          <p className={s.subTitle}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Link to="/catalog" className={s.link}>
          View Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
