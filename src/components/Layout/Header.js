import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img
          src={
            "https://as2.ftcdn.net/v2/jpg/03/13/43/95/1000_F_313439588_W18RtX1Ye1eNnNwp6SXATZHDPxE4bjjy.jpg"
          }
          alt="banner"
        />
      </div>
    </>
  );
}

export default Header;
