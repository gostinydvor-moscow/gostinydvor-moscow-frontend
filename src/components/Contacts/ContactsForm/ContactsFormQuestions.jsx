import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setContactsQuestion} from "../../../redux/actions/contacts";

const ContactsFormQuestions = ({errorRefQuestions}) => {
    const dispatch = useDispatch();

    const {question} = useSelector(({contacts}) => contacts);

    const questions = [
        "Арендовать гостиный двор для выставки",
        "Аренда места на выставке",
        "Реклама",
        "Взаимное сотрудничество",
        "Вопрос по билетам",
        "Другое",
    ];

    const changeQuestion = (question) => {
        dispatch(setContactsQuestion(question));
    };

    return (
        <div
            className="contacts-form-block contacts-form-block-btn"
            ref={errorRefQuestions}
        >
            {questions.map((title, index) => (
                <button
                    key={`contacts-form-block__btn-${index}`}
                    className={`contacts-form-block__btn ${
                        title === question ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => changeQuestion(title)}
                >
                    {title}
                </button>
            ))}
        </div>
    );
};

export default ContactsFormQuestions;
