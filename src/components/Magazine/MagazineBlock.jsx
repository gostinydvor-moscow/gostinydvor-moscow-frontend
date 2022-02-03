import React from "react";
import {Link} from "react-router-dom";

const MagazineBlock = ({_id, image, date, title, description}) => {
    return (
        <Link to={`/magazine/${_id}`} className="magazine-block">
            <div className="magazine-block-cover">
                <div
                    className="magazine-block-cover-image"
                    style={{
                        backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                    }}
                ></div>
            </div>
            <div className="magazine-block-text">
                <p className="subtitle magazine-block-text__date">{date}</p>
                <h3 className="magazine-block-text__title">{title}</h3>
                <p className="magazine-block-text__description">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default MagazineBlock;
