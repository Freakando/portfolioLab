import Header from "./Header";
import React from "react";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps"
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import WhoWeHelp2 from "./WhoWeHelp2"
import Footer from "./Footer"
import("./Home.scss");

const Home = () => {
    return (
        <div>
            <Header />
            <ThreeColumns />
            <SimpleSteps />
            <AboutUs />
            <WhoWeHelp />
            {/*<WhoWeHelp2 />*/}
            <Footer />



        </div>
    )
}


export default Home;
