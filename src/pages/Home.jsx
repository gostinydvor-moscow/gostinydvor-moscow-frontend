import React from "react";
import {Helmet} from "react-helmet";

import {
    EventMainSlider,
    EventSection,
    MagazineSection,
    Maps,
} from "../components";

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

            <MagazineSection />

            <Maps />
        </>
    );
};

export default Home;
