import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchMagazineById} from "../redux/actions/magazine";

import {
    Loader,
    MagazinePostPageBlock,
    MagazinePostPageNext,
    MagazinePostPageEnd,
} from "../components/";

const MagazinePostPage = ({
    match: {
        params: {id},
    },
}) => {
    const dispatch = useDispatch();

    const {itemById, isLoadedById} = useSelector(({magazine}) => magazine);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchMagazineById(id));
    }, [id]);

    return (
        <>
            {isLoadedById ? (
                <>
                    <section className="magazine-post-page">
                        <div className="container">
                            <div className="magazine-post-page-wrapper">
                                <div className="magazine-post-page-top">
                                    <div className="magazine-post-page-top-text">
                                        <p className="subtitle magazine-post-page-top-text__date">
                                            {itemById.date}
                                        </p>
                                        <h3 className="magazine-post-page-top-text__title">
                                            {itemById.title}
                                        </h3>
                                        <p className="magazine-post-page-top-text__description">
                                            {itemById.description}
                                        </p>
                                    </div>
                                    <div
                                        className="magazine-post-page-top-image"
                                        style={{
                                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${itemById.image}")`,
                                        }}
                                    ></div>
                                </div>
                                <div className="magazine-post-page-block-wrapper">
                                    {itemById.content.map((block, index) => (
                                        <MagazinePostPageBlock
                                            {...block}
                                            key={`magazine-post-page-block-${index}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            {itemById.next ? (
                                <MagazinePostPageNext {...itemById.next} />
                            ) : (
                                <MagazinePostPageEnd />
                            )}
                        </div>
                    </section>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default MagazinePostPage;
