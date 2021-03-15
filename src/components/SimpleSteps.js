import Decoration from "../assets/Decoration.svg";
import shoppingBag from "../assets/shoppingBag.svg";
import magnifier from "../assets/magnifier.svg";
import infinityArrows from "../assets/infinityArrows.svg";
import tShirt from "../assets/tShirt.svg";
import React from "react";
import "./SimpleSteps.scss";


function SimpleSteps() {
    return (
        <section className="simpleSteps__section">
            <div className="simpleSteps__wrapper">
                <div className="simpleSteps__titleBox">
                    <p simpleSection__title>Wystarczą 4 proste kroki</p>
                </div>
                <div className="simpleSteps__decorationBox">
                    <img className="Decoration" src={Decoration}/>
                </div>
                <div className="simpleSteps__contentBox">
                    <div className="simpleSteps__column">
                        <img className="simpleSteps__image" src={tShirt}/>
                        <h3 className="simpleSteps__stepTitle">Wybierz rzeczy</h3>
                        <div className="small__border"></div>
                        <p className="simpleSteps__text">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="simpleSteps__column">
                        <img className="simpleSteps__image" src={shoppingBag}/>
                        <h3 className="simpleSteps__stepTitle">Spakuj je</h3>
                        <div className="small__border"></div>
                        <p className="simpleSteps__text">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="simpleSteps__column">
                        <img className="simpleSteps__image" src={magnifier}/>
                        <h3 className="simpleSteps__stepTitle">Zdecyduj komu chcesz pomóc</h3>
                        <div className="small__border"></div>
                        <p className="simpleSteps__text">wybierz zaufane miejsce</p>
                    </div>
                    <div className="simpleSteps__column">
                        <img className="simpleSteps__image" src={infinityArrows}/>
                        <h3 className="simpleSteps__stepTitle">Zamów kuriera</h3>
                        <div className="small__border"></div>
                        <p className="simpleSteps__text">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className="simpleSteps__buttonBox">
                    <button className="simpleSteps__button">oddaj <br/> rzeczy</button>
                </div>
            </div>
        </section>
    );
}

export default SimpleSteps;
