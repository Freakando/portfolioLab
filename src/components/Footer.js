// import Decoration from "../assets/Decoration.svg";
import React from "react";
import "./Footer.scss"

function Footer() {
    return (
        <section id="contact" className="footer">
            <div className="footer__container">
                <div className="footer__container__contentBox">
                    <p className="footer__container__contentBox__title">Skontaktuj się z nami</p>
                    <img className="footer__container__contentBox__decoration"/>
                    <form>
                        <label>
                            Imię:
                            <input type="text" name="name"/>
                        </label>
                        <input type="submit" value="Wyślij"/>
                    </form>
                </div>
                <div className="footer__container__foot">
                    <div className="footer__container__foot__copyright">
                        <p className="footer__container__foot__copyright--text">ss</p>
                    </div>
                    <div className="footer__container__foot__icons">

                    </div>
                </div>
            </div>
        </section>
);

}


export default Footer;
