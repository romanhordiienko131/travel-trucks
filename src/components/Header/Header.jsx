import s from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <div className={s.navigationContainer}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
