import React from "react";

const MagazinePostPageBlock = ({title, description, image}) => {
    return (
        <div className="magazine-post-page-block">
            <div className="magazine-post-page-block-text">
                <h3 className="magazine-post-page-block-text__title">
                    {title}
                </h3>
                <p className="magazine-post-page-block-text__description">
                    {description}
                </p>
            </div>
            <div
                className="magazine-post-page-block-image"
                style={{
                    backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                }}
            ></div>
        </div>
    );
};

export default MagazinePostPageBlock;
