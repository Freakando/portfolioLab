import homeHeroImage2 from "../assets/homeHeroImage2.jpg";
import Decoration from "../assets/Decoration.svg"
import Nav from "./Nav";
import React from "react";

import("./Header.scss");


const Header = () => {
    return (
        <div className="header__section">


            <div className="header__wrapper">
                <img className="homeHeroImage2" src={homeHeroImage2} alt="box of items"/>

                <div className="headerContent__box">
                    <div className="nav__box">
                        <div className="userPanel">
                            <button className="usP__button">Zaloguj</button>
                            <button className="usP__button">Załóż konto</button>
                        </div>
                        <Nav/>
                    </div>
                    <div className="headerTitleAndButton__box">
                        <div className="headerTitle__box">
                            <h1 className="pageTitle">Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                        </div>
                        <div className="decoration__box">
                            <img className="Decoration" src={Decoration}/>
                        </div>
                        <div className="headerButton__box">
                            <button className="headerButton">oddaj<br/> rzeczy</button>
                            <button className="headerButton">zorganizuj<br/> zbiórkę</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
}


export default Header;
