import s from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerContainer}>
          <Logo />
          <div className={s.navigationContainer}>
            <Navigation />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
