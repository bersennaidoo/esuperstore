import React from "react";
import Logo from "../../../images/100x100.png";
console.log(Logo);

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="super shop logo" />
        </header>
    )
}

export default Header;