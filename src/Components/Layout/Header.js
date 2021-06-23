import { Fragment } from "react";
import mealsImage from "../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <div>
        <header className={classes.header}>
          <ul>
            <h1>WishMeal</h1>
            <p> Track your Favourite meals to buy them later</p>
          </ul>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
      </div>
      <div className={classes["main-image"]}>
        <img src={mealsImage} />
      </div>
    </Fragment>
  );
};

export default Header;
