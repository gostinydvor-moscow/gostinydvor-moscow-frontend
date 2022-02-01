import React from "react";

const Maps = () => {
    const iFrame = `<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2495713829926!2d37.622255715930606!3d55.75416668055371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a59be0aac5f%3A0x1076e7d379711e3c!2z0JPQvtGB0YLQuNC90YvQuSDQlNCy0L7RgA!5e0!3m2!1sru!2sru!4v1642060136953!5m2!1sru!2sru"
                width="100%"
                height="600"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
            ></iframe>`;

    return (
        <section className="maps">
            <div className="container">
                <div className="maps-wrapper">
                    <div dangerouslySetInnerHTML={{__html: iFrame}} />
                </div>
            </div>
        </section>
    );
};

export default Maps;
