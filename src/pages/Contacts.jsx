import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {ContactsForm, ContactsFormThankYou, Maps} from "../components/";

import {setContactsIsSend, sendFormContact} from "../redux/actions/contacts";

const Contacts = () => {
    const dispatch = useDispatch();

    const {question, isSend} = useSelector(({contacts}) => contacts);

    const errorRefQuestions = React.useRef();

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(setContactsIsSend(false));
    }, []);

    const onSubmit = (formData) => {
        if (question === "") {
            window.scrollTo({
                top: errorRefQuestions.current.offsetTop,
                behavior: "smooth",
            });

            return;
        }

        dispatch(sendFormContact({...formData, question}));
    };

    React.useEffect(() => {
        if (isSend) {
            window.scrollTo(0, 0);
        }
    }, [isSend]);

    return (
        <>
            <Helmet>
                <title>Контакты - Гостиный двор Москва</title>
            </Helmet>
            <section className="contacts">
                <div className="container">
                    <div className="contacts-wrapper">
                        {isSend ? (
                            <ContactsFormThankYou />
                        ) : (
                            <ContactsForm
                                onSubmit={onSubmit}
                                errorRefQuestions={errorRefQuestions}
                            />
                        )}
                    </div>
                </div>
            </section>

            <Maps />
        </>
    );
};

export default Contacts;
