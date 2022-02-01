import React from "react";
import {reduxForm} from "redux-form";
import {Link} from "react-router-dom";

import {ContactsFormQuestions, ContactsFormContactUser} from "../../";

import validate from "./validate";

let ContactsForm = ({handleSubmit, errorRefQuestions}) => {
    return (
        <form onSubmit={handleSubmit} className="contacts-form">
            <div className="contacts-form-top-text">
                <h2 className="title contacts-form-top-text__title">
                    Контакты
                </h2>
                <p className="contacts-form-top-text__description">
                    Оставьте заявку, либо позвоните, мы пообщаемся и сами всё
                    заполним:{" "}
                    <a href="tel:+7 985 508 46 80">+7 985 508 46 80</a>
                </p>
            </div>

            <ContactsFormQuestions errorRefQuestions={errorRefQuestions} />
            <ContactsFormContactUser />

            <div className="contacts-form-btn">
                <button className="btn contacts-form-btn__btn" type="submit">
                    Отправить
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
                </button>

                <p className="contacts-form-btn__policy">
                    Нажимая на кнопку, вы даете{" "}
                    <Link to="/personal-data">согласие</Link> на обработку
                    персональных данных и соглашаетесь с политикой
                    конфиденциальности.
                </p>
            </div>
        </form>
    );
};

ContactsForm = reduxForm({
    form: "contacts-form",
    validate,
})(ContactsForm);

export default ContactsForm;
