import Header from "./Header";
import React from "react";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps"
import("./Home.scss");

const Home = () => {
    return (
        <div>
            <Header />
            <ThreeColumns />
            <SimpleSteps />
            {/*<AboutUs />*/}
            {/*<WhoWeHelp />*/}
            {/*<Footer />*/}



        </div>
    )
}


export default Home;
