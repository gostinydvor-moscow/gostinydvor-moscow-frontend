import React from "react";

const MagazinePostPageBlock = ({title, description, image}) => {
    return (
        <div className="magazine-post-page-block">
            <div className="magazine-post-page-block-text">
                <h3 className="magazine-post-page-block-text__title">
                    {title}
                </h3>
                <p
                    className="magazine-post-page-block-text__description"
                    dangerouslySetInnerHTML={{__html: description}}
                ></p>
            </div>
            {image && image !== "" ? (
                <div
                    className="magazine-post-page-block-image"
                    style={{
                        backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                    }}
                ></div>
            ) : null}
        </div>
    );
};

export default MagazinePostPageBlock;
