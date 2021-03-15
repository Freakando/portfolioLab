import React from "react";
import "./ThreeColumns.scss"
function ThreeColumns() {
    return (
        <section className="threeColumns__section">
            <div className="threeColumn__wrapper">
                <div className="threeColumn__box">
                    <p className="column__text1">10</p>
                    <p className="column__text2">oddanych worków</p>
                    <p className="column__text3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fuga fugiat necessitatibus porro quis. Amet, veniam.</p>
                </div>
                <div className="threeColumn__box">
                    <p className="column__text1">5</p>
                    <p className="column__text2">wspartych organizacji</p>
                    <p className="column__text3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto iste molestias nihil repellendus tempore vitae voluptas.</p>
                </div>
                <div className="threeColumn__box">
                    <p className="column__text1">7</p>
                    <p className="column__text2">zorganizowanych zbiórek</p>
                    <p className="column__text3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sapiente, vero. Delectus, error molestiae? Iusto, modi, nam.</p>
                </div>
            </div>
        </section>
    );
}

export default ThreeColumns;
