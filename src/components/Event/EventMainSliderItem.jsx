import React from "react";

const EventMainSliderItem = ({url, image}) => {
    return (
        <>
            {url ? (
                <a href={url} className="event-main-slider-item">
                    <img
                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`}
                        alt=""
                        className="event-main-slider-item__image"
                    />
                </a>
            ) : (
                <div className="event-main-slider-item">
                    <img
                        src={`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`}
                        alt=""
                        className="event-main-slider-item__image"
                    />
                </div>
            )}
        </>
    );
};

export default EventMainSliderItem;
