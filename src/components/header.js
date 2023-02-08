import React from "react";
import logo from "/src/images/logo.png"
import MButton from "./menu_button";

class Header extends React.Component {
    render() {
        return(
            <header>
                <img id="logo" src={logo} alt="logo" />
                <div className="buttonset">
                    <MButton button="Business areas" />
                    <MButton button="Featured images" />
                    <MButton button="Gear cage" />
                    <MButton button="Contact" />
                    <MButton button="Get template" />
                </div>
            </header>
        )
    }
}

export default Header