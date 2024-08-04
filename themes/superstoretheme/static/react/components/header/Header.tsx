import React from "react";
import Logo from "../../../images/100x100.png";

const Header = () => {
  return (
    <header className="">
        <div className="d-flex gap-4">
            <img className="img-fluid" src={Logo} alt="super store logo" />
            <h1>SuperStore</h1>
        </div>
    </header>
  );
};

export default Header;
