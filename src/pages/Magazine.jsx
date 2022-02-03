import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Loader, MagazineBigBlock, MagazineBlock} from "../components/";

import {
    fetchMagazineLimitFirst,
    fetchMagazineLimit,
} from "../redux/actions/magazine";

const Magazine = () => {
    const dispatch = useDispatch();

    const {allItems, isLoaded, isLoadedLimit, page, totalCount} = useSelector(
        ({magazine}) => magazine
    );

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!allItems.length) {
            dispatch(fetchMagazineLimitFirst());
        }
    }, []);

    const onClickFetchMagazine = () => {
        dispatch(fetchMagazineLimit(page));
    };

    return (
        <>
            {isLoaded ? (
                <section className="magazine">
                    <div className="container">
                        <div className="magazine-wrapper">
                            {document.documentElement.clientWidth > 900 ? (
                                <>
                                    <MagazineBigBlock {...allItems[0]} />

                                    <div className="magazine-block-wrapper">
                                        {allItems.map((item, index) =>
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
                                    {allItems.map((item, index) => (
                                        <MagazineBlock
                                            {...item}
                                            key={`magazine-block-${index}`}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="magazine-btn-wrapper">
                                {allItems.length == totalCount ? null : (
                                    <button
                                        onClick={onClickFetchMagazine}
                                        className="btn magazine-btn__btn"
                                    >
                                        Загрузить еще
                                        <svg
                                            width="50"
                                            height="50"
                                            viewBox="0 0 50 50"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={
                                                isLoadedLimit ? "" : "rotate"
                                            }
                                        >
                                            <path
                                                d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
                                                fill="#EB2E2E"
                                            />
                                            <path
                                                d="M20.4617 19.6871C23.2067 17.204 27.3149 17.166 30.0979 19.4327L27.892 19.5163C27.6072 19.5276 27.387 19.763 27.3984 20.0478C27.4098 20.325 27.6376 20.5414 27.9109 20.5414C27.9185 20.5414 27.9224 20.5414 27.93 20.5414L31.3166 20.4161C31.5938 20.4047 31.8103 20.1807 31.8103 19.9035V19.8656C31.8103 19.858 31.8103 19.8542 31.8103 19.8466V19.8428L31.6849 16.494C31.6736 16.2092 31.4344 15.989 31.1534 16.0004C30.8686 16.0118 30.6484 16.2472 30.6598 16.532L30.7395 18.6316C29.3613 17.504 27.6641 16.8509 25.8493 16.7598C23.6016 16.6459 21.4412 17.4166 19.7744 18.9278C17.4812 21.0046 16.5092 24.1635 17.2382 27.1706C17.2951 27.406 17.504 27.5616 17.7356 27.5616C17.7773 27.5616 17.8153 27.5579 17.8571 27.5464C18.1304 27.4781 18.3013 27.201 18.233 26.9276C17.5951 24.285 18.4456 21.5096 20.4617 19.6871Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M33.7618 23.4232C33.6935 23.1498 33.4164 22.9789 33.143 23.0473C32.8695 23.1156 32.6987 23.3928 32.7671 23.6662C33.4088 26.3087 32.5545 29.0841 30.5384 30.9067C29.1222 32.1862 27.3453 32.8164 25.5759 32.8164C23.8864 32.8164 22.2006 32.2431 20.8414 31.1117L23.0739 30.9104C23.3548 30.8839 23.5637 30.637 23.5371 30.3523C23.5105 30.0675 23.2637 29.8625 22.9789 29.8891L19.6036 30.1929C19.3226 30.2194 19.1138 30.4662 19.1404 30.7509L19.4441 34.1263C19.4669 34.3921 19.6909 34.5933 19.9529 34.5933C19.9681 34.5933 19.9833 34.5933 19.9985 34.5895C20.2794 34.5629 20.4883 34.3162 20.4617 34.0314L20.2794 31.9773C21.6577 33.0935 23.3472 33.7428 25.1507 33.8339C25.295 33.8415 25.4393 33.8454 25.5797 33.8454C27.6718 33.8454 29.6613 33.0783 31.2256 31.666C33.5188 29.5892 34.4908 26.434 33.7618 23.4232Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Magazine;
