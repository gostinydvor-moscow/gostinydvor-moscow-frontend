import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

import {EventMainSlider, EventSection, Maps} from "../components";

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Главная - Гостиный двор Москва</title>
            </Helmet>

            <EventMainSlider />

            <EventSection />

            <Maps />
        </>
    );
};

export default Home;
