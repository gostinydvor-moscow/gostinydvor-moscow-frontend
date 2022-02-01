import React from "react";
import {useDispatch, useSelector} from "react-redux";

import OwlCarousel from "react-owl-carousel2";
import "../../assets/owl-carousel/owl.carousel.css";
import "animate.css";

import {EventMainSliderItem} from "../";

import {fetchEventsSlider} from "../../redux/actions/events";

const EventMainSlider = () => {
    const dispatch = useDispatch();

    const {sliderItems, isLoadedSlider} = useSelector(({events}) => events);

    const slider = React.useRef();

    React.useEffect(() => {
        if (!sliderItems.length) {
            dispatch(fetchEventsSlider());
        }
    }, []);

    const options = {
        items: 1,
        margin: 5,
        loop: true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 3000,
        animateIn: "animate__fadeIn",
        animateOut: "animate__fadeOut",
    };

    const prev = () => {
        slider.current.prev();
    };

    const next = () => {
        slider.current.next();
    };

    return (
        <>
            {isLoadedSlider ? (
                <section className="event-main-slider">
                    <div className="container">
                        <div className="event-main-slider-wrapper">
                            <div
                                className="event-main-slider-arrow-prev"
                                onClick={prev}
                            >
                                <svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="25"
                                        cy="25"
                                        r="25"
                                        transform="rotate(-180 25 25)"
                                        fill="#EDEDED"
                                    />
                                    <path
                                        d="M16.2929 24.2929C15.9024 24.6834 15.9024 25.3166 16.2929 25.7071L22.6569 32.0711C23.0474 32.4616 23.6805 32.4616 24.0711 32.0711C24.4616 31.6805 24.4616 31.0474 24.0711 30.6569L18.4142 25L24.0711 19.3431C24.4616 18.9526 24.4616 18.3195 24.0711 17.9289C23.6805 17.5384 23.0474 17.5384 22.6569 17.9289L16.2929 24.2929ZM32 24H17V26H32V24Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>

                            <div
                                className="event-main-slider-arrow-next"
                                onClick={next}
                            >
                                <svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="25"
                                        cy="25"
                                        r="25"
                                        fill="#EDEDED"
                                    />
                                    <path
                                        d="M33.7071 25.7071C34.0976 25.3166 34.0976 24.6834 33.7071 24.2929L27.3431 17.9289C26.9526 17.5384 26.3195 17.5384 25.9289 17.9289C25.5384 18.3195 25.5384 18.9526 25.9289 19.3431L31.5858 25L25.9289 30.6569C25.5384 31.0474 25.5384 31.6805 25.9289 32.0711C26.3195 32.4616 26.9526 32.4616 27.3431 32.0711L33.7071 25.7071ZM18 26H33V24H18V26Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>

                            <div className="event-main-slider-item-wrapper">
                                <OwlCarousel ref={slider} options={options}>
                                    <EventMainSliderItem image="all/sliderMain.jpg" />

                                    {sliderItems.map((item, index) => (
                                        <EventMainSliderItem
                                            {...item}
                                            key={`event-main-slider-item-${item.eventId}-${index}`}
                                        />
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default EventMainSlider;
