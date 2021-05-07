import React, {useState, useEffect} from "react";
import Decoration from "../assets/Decoration.svg";
import "./WhoWeHelp.scss";


function WhoWeHelp() {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState('foundation');
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3005/${current}`)
            .then(response => response.json())
            .then(element => {
                setData(element);
            }).catch(err => console.log(err));
    }, [current]);

    const getPaginate = () => {
        if (!data?.items) return [];
        const pages = Math.ceil(data?.items?.length / 3)


        return new Array(pages).fill(null).map((_, i) => (


            <button key={i} onClick={() => setCurrentPage(i)} className="whoWeHelp__container__pageNumber--button">{i + 1}</button>
        ))
    }

    const getItems = () => {
        if (!data?.items?.length) return [];
        const offset = currentPage * 3;
        const limit = offset + 3;
        return data?.items.slice(offset, limit);
    }

    return (
        <section className="whoWeHelp">
                    <div className="whoWeHelp__container">

                        <div className="whoWeHelp__container__titleBox">
                            <h2 className="whoWeHelp__container__titleBox__title">Komu pomagamy?</h2>
                        </div>
                        <img className="whoWeHelp__container__decoration" src={Decoration}/>
                        <div className="whoWeHelp__container__buttons">
                            <button onClick={() => setCurrent('foundation')} className="whoWeHelp__container__buttons--button">Fundacjom</button>
                            <button  onClick={() => setCurrent('organisation')} className="whoWeHelp__container__buttons--button">Organizacjom<br/>pozarządowym
                            </button>
                            <button onClick={() => setCurrent('local')} className="whoWeHelp__container__buttons--button">Lokalnym zbiórkom</button>
                        </div>
                        <div className="whoWeHelp__container__article">
                            <div className={"whoWeHelp__container__article--text"}>
                                {data?.desc}
                            </div>
                        </div>
                        <div className="whoWeHelp__container__organisationsBox">
                            {getItems().map(el => (
                                <div key={el.id} className="whoWeHelp__container__organisationsBox__organisation">
                                    <div className="whoWeHelp__container__organisationsBox__organisation__leftColumn">
                                        <p className="whoWeHelp__container__organisationsBox__organisation__leftColumn--name">{el.title}</p>
                                        <p className="whoWeHelp__container__organisationsBox__organisation__leftColumn--text">{el.subtitle}</p>
                                    </div>
                                    <div className="whoWeHelp__container__organisationsBox__organisation__rightColumn">
                                        <p className="whoWeHelp__container__organisationsBox__organisation__rightColumn--text">{el.other}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="whoWeHelp__container__pageNumber">
                            {getPaginate()}
                        </div>

                    </div>
                )
        </section>
    );
}

export default WhoWeHelp;
