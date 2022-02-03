import React from "react";

import { MagazineBlock } from "../../../components/";

const EventPageMagazine = ({ posts, _id }) => {
	console.log(posts);
    return (
        <section className="magazine-section">
            <div className="container">
                <div className="magazine-section-wrapper">
                    <h2 className="title__mb magazine-section-wrapper__title">
                        Участники
                    </h2>

                    <div className="magazine-block-wrapper">
                        {posts.map((item, index) => (
                            <MagazineBlock
                                {...item}
                                key={`events-magazine-block-${index}-${_id}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventPageMagazine;
