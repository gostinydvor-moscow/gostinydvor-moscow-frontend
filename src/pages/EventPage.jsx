import React from "react";
import {Helmet} from "react-helmet";
import {Link, animateScroll as scroll} from "react-scroll";
import {useDispatch, useSelector} from "react-redux";

import {Loader, Maps, EventPageAbout} from "../components/";

import {fetchEventByUrl} from "../redux/actions/events";

const EventPage = ({
    match: {
        params: {url},
    },
}) => {
    const dispatch = useDispatch();

    const {itemByUrl, isLoadedByUrl} = useSelector(({events}) => events);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchEventByUrl(url));
    }, [url]);

    React.useEffect(() => {
        if (isLoadedByUrl && itemByUrl.eventId !== "") {
            const script = document.createElement("script");
            const scriptText = document.createTextNode(
                `(function(){return {"loadCSS": ["${process.env.REACT_APP_IMAGE_DOMEN}/all/style.css"], "event":{"id":"${itemByUrl.eventId}"},"addFormData":{"utm_refcode":"${itemByUrl.utmRefcode}"}}; })();`
            );

            script.setAttribute(
                "src",
                "https://timepad.ru/js/tpwf/loader/min/loader.js"
            );
            script.setAttribute("type", "text/javascript");
            script.setAttribute("async", true);
            script.setAttribute("defer", true);
            script.setAttribute("data-timepad-widget-v2", "event_register");

            script.appendChild(scriptText);

            document.querySelector("#event-page-form").appendChild(script);
        }
    }, [isLoadedByUrl, url]);

    return (
        <>
            <Helmet>
                <title>
                    {isLoadedByUrl ? itemByUrl.title : ""} - Гостиный двор
                    Москва
                </title>
            </Helmet>
            {isLoadedByUrl ? (
                Object.keys(itemByUrl).length ? (
                    <section className="event-page">
                        <div className="container">
                            <div className="event-page-wrapper">
                                <div className="event-page-top">
                                    <div className="event-page-top-text">
                                        <span className="subtitle event-page-top-text__subtitle">
                                            {itemByUrl.dateStart} -{" "}
                                            {itemByUrl.dateEnd}
                                        </span>
                                        <h3 className="event-page-top-text__title">
                                            {itemByUrl.title}
                                        </h3>
                                        <p
                                            className="event-page-top-text__description"
                                            dangerouslySetInnerHTML={{
                                                __html: itemByUrl.description,
                                            }}
                                        ></p>
                                        {itemByUrl.eventId !== "" ? (
                                            <Link
                                                to="event-page-form"
                                                spy={true}
                                                smooth={true}
                                                offset={-100}
                                                duration={750}
                                            >
                                                <button className="btn event-page-top-text__btn__svg__rotate">
                                                    Купить билеты
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
                                                            fill="#EB2E2E"
                                                        />
                                                        <path
                                                            d="M33.7071 25.7071C34.0976 25.3166 34.0976 24.6834 33.7071 24.2929L27.3431 17.9289C26.9526 17.5384 26.3195 17.5384 25.9289 17.9289C25.5384 18.3195 25.5384 18.9526 25.9289 19.3431L31.5858 25L25.9289 30.6569C25.5384 31.0474 25.5384 31.6805 25.9289 32.0711C26.3195 32.4616 26.9526 32.4616 27.3431 32.0711L33.7071 25.7071ZM18 26H33V24H18V26Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </button>
                                            </Link>
                                        ) : null}

                                        {itemByUrl.eventRefUrl !== "" ? (
                                            <a
                                                href={itemByUrl.eventRefUrl}
                                                className="btn event-page-top-text__btn"
                                            >
                                                Купить билеты
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
                                                        fill="#EB2E2E"
                                                    />
                                                    <path
                                                        d="M33.7071 25.7071C34.0976 25.3166 34.0976 24.6834 33.7071 24.2929L27.3431 17.9289C26.9526 17.5384 26.3195 17.5384 25.9289 17.9289C25.5384 18.3195 25.5384 18.9526 25.9289 19.3431L31.5858 25L25.9289 30.6569C25.5384 31.0474 25.5384 31.6805 25.9289 32.0711C26.3195 32.4616 26.9526 32.4616 27.3431 32.0711L33.7071 25.7071ZM18 26H33V24H18V26Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </a>
                                        ) : null}
                                    </div>
                                    <div
                                        className="event-page-top-image"
                                        style={{
                                            backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${itemByUrl.image}')`,
                                        }}
                                    ></div>
                                </div>

                                {itemByUrl.about && itemByUrl.about.length ? (
                                    <EventPageAbout about={itemByUrl.about} />
                                ) : null}

                                <div
                                    className="event-page-form"
                                    id="event-page-form"
                                ></div>
                            </div>
                        </div>
                    </section>
                ) : (
                    (window.location.href = "/")
                )
            ) : (
                <Loader />
            )}

            <Maps />
        </>
    );
};

export default EventPage;
