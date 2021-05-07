import React, {useState, useEffect} from "react";
import Decoration from "../assets/Decoration.svg";
import "./WhoWeHelp.scss";

function WhoWeHelp() {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState (['foundation']);

    useEffect(() => {
        fetch(`http://localhost:3005/${current}`)
            .then(response => response.json())
            .then(element => {
                setData(element);
            }).catch(err => console.log(err));

        },  [current]);
    console.log(data);



return (
    <section className="whoWeHelp">
        <div className="whoWeHelp__container">

            <div className="whoWeHelp__container__titleBox">
                <h2 className="whoWeHelp__container__titleBox__title">Komu pomagamy?</h2>
            </div>
            <img className="whoWeHelp__container__decoration" src={Decoration}/>
            <div className="whoWeHelp__container__buttons">
                <button className="whoWeHelp__container__buttons--button">Fundacjom</button>
                <button className="whoWeHelp__container__buttons--button">Organizacjom<br/>pozarządowym
                </button>
                <button className="whoWeHelp__container__buttons--button">Lokalnym zbiórkom</button>
            </div>
            <div className="whoWeHelp__container__article">
                <div className="whoWeHelp__container__article--text">
                    {data && data.desc}


                </div>
            </div>
            <div className="whoWeHelp__container__organisationsBox">
                {data && data.items.map(el =>{
                    return (
                        <div key={el.id} className="whoWeHelp__container__organisationsBox__organisation">
                            <div className="whoWeHelp__container__organisationsBox__organisation__leftColumn">
                                <p className="whoWeHelp__container__organisationsBox__organisation__leftColumn--name">{el.title}</p>
                                <p className="whoWeHelp__container__organisationsBox__organisation__leftColumn--text">{el.subtitle}</p>
                            </div>
                            <div className="whoWeHelp__container__organisationsBox__organisation__rightColumn">
                                <p className="whoWeHelp__container__organisationsBox__organisation__rightColumn--text">{el.other}</p>
                            </div>
                        </div>
                    )
                })}



            </div>
            <div className="whoWeHelp__container__pageNumber">

            </div>

        </div>
        )
    </section>
);
}

export default WhoWeHelp;
