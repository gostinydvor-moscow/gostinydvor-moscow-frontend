import React from "react";
import {Link} from "react-router-dom";

const MagazineBigBlock = ({_id, image, date, title, description}) => {
    return (
        <div className="magazine-big-block">
            <Link to={`/magazine/${_id}`} className="magazine-big-block-cover">
                <div
                    className="magazine-big-block-cover-image"
                    style={{
                        backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                    }}
                ></div>
            </Link>
            <div className="magazine-big-block-text">
                <Link
                    to={`/magazine/${_id}`}
                    className="magazine-big-block-text-top"
                >
                    <p className="subtitle magazine-big-block-text__date">
                        {date}
                    </p>
                    <h3 className="magazine-big-block-text__title">{title}</h3>
                    <p className="magazine-big-block-text__description">
                        {description}
                    </p>
                </Link>
                <div className="magazine-big-block-text-bottom">
                    <Link
                        to={`/magazine/${_id}`}
                        className="btn magazine-big-block-text__btn"
                    >
                        Читать статью
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
        </div>
    );
};

export default MagazineBigBlock;
