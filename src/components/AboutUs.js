import Decoration from "../assets/Decoration.svg";
import signature from "../assets/signature.svg";
import People from "../assets/People.jpg";
import React from 'react';
import "./AboutUs.scss"

function AboutUs() {
    return (
        <section className="aboutUs">
            <div className="aboutUs__container">
                <div className="aboutUs__container__article">
                    <h3 className="aboutUs__container__article--title">O nas</h3>
                    <img className="aboutUs__container__article--decoration" src={Decoration}/>
                        <div className="aboutUs__container__article__textBox">
                            <p className="aboutUs__container__article__textBox--text">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Adipisci aliquid aperiam dolores eligendi exercitationem expedita, illo
                        maiores neque, non quam repudiandae saepe similique voluptas.</p>
                        </div>
                    <div className="aboutUs__container__article__signature">
                        <img className="aboutUs__container__article__signature--image" src={signature}/>
                    </div>
                </div>
                <div className="aboutUs__container__pictureBox">
                    <img className="aboutUs__container__pictureBox--picture" src={People}/>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
