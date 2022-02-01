import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {EventBlock, Loader} from "../";

import {fetchEventsSection} from "../../redux/actions/events";

const EventSection = () => {
    const dispatch = useDispatch();

    const {sectionItems, isLoadedSection} = useSelector(({events}) => events);

    React.useEffect(() => {
        if (!sectionItems.length) {
            dispatch(fetchEventsSection());
        }
    }, []);

    return (
        <>
            <section className="event-section">
                <div className="container">
                    <div className="event-section-wrapper">
                        <h2 className="title__mb event-section__title">
                            Ближайшие мероприятия
						</h2>
						
                        {isLoadedSection ? (
                            <div className="event-section-block-wrapper">
                                {sectionItems.map((block, index) => (
                                    <EventBlock
                                        {...block}
                                        key={`event-section-block${index}`}
                                    />
                                ))}
                            </div>
                        ) : (
                            <Loader />
                        )}

                        <Link to="/events" className="btn event-section__btn">
                            Показать еще
                            <svg
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="25" cy="25" r="25" fill="#EB2E2E" />
                                <path
                                    d="M33.7071 25.7071C34.0976 25.3166 34.0976 24.6834 33.7071 24.2929L27.3431 17.9289C26.9526 17.5384 26.3195 17.5384 25.9289 17.9289C25.5384 18.3195 25.5384 18.9526 25.9289 19.3431L31.5858 25L25.9289 30.6569C25.5384 31.0474 25.5384 31.6805 25.9289 32.0711C26.3195 32.4616 26.9526 32.4616 27.3431 32.0711L33.7071 25.7071ZM18 26H33V24H18V26Z"
                                    fill="white"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventSection;
