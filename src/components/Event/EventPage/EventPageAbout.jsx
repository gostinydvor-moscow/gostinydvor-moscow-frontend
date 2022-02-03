import React from "react";

const EventPageAbout = ({about}) => {
    return (
        <div className="event-page-about">
            <h2 className="event-page-about__title title">О мероприятии</h2>

            {about.map((item, index) => (
                <p
                    className="event-page-about__description"
                    key={`event-page-about__description-${index}`}
                >
                    {item.description}
                </p>
            ))}
        </div>
    );
};

export default EventPageAbout;
