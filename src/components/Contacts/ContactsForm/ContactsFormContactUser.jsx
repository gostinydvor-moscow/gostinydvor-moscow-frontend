import React from "react";
import {Field} from "redux-form";

import {RenderInput, RenderInputAutoSize} from "../../";

const ContactsFormContactUser = () => {
    return (
        <div className="contacts-form-block">
            <div className="contacts-form-block-input-wrapper">
                <div className="contacts-form-block-input">
                    <Field component={RenderInput} label="Имя" name="name" />
                </div>
                <div className="contacts-form-block-input">
                    <Field
                        component={RenderInput}
                        label="Телефон или любой мессенджер"
                        name="contact"
                    />
                </div>
            </div>
            <div className="contacts-form-block-input-wrapper">
                <div className="contacts-form-block-input">
                    <Field component={RenderInput} label="Email" name="email" />
                </div>
                <div className="contacts-form-block-input">
                    <Field
                        component={RenderInputAutoSize}
                        label="Краткое описание задачи"
                        name="task"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactsFormContactUser;
