import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Loader, MagazineBigBlock, MagazineBlock} from "../../components/";

import {fetchMagazineSection} from "../../redux/actions/magazine";

const MagazineSection = () => {
    const dispatch = useDispatch();

    const {sectionItems, isLoadedSection} = useSelector(
        ({magazine}) => magazine
    );

    React.useEffect(() => {
        if (!sectionItems.length) {
            dispatch(fetchMagazineSection());
        }
    }, []);

    return (
        <div className="magazine-section-wrapper">
            <h2 className="title__mb magazine-section-wrapper__title">
                Журнал
            </h2>

            {isLoadedSection ? (
                <>
                    {document.documentElement.clientWidth > 900 ? (
                        <>
                            <MagazineBigBlock {...sectionItems[0]} />

                            <div className="magazine-block-wrapper">
                                {sectionItems.map((item, index) =>
                                    index !== 0 ? (
                                        <MagazineBlock
                                            {...item}
                                            key={`magazine-block-${index}`}
                                        />
                                    ) : null
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="magazine-block-wrapper">
                            {sectionItems.map((item, index) => (
                                <MagazineBlock
                                    {...item}
                                    key={`magazine-block-${index}`}
                                />
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <Loader />
            )}

            <Link to="/magazine" className="btn magazine-section__btn">
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
    );
};

export default MagazineSection;
