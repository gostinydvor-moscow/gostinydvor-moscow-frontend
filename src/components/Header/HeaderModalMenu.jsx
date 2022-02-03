import React from "react";
import {NavLink, Link} from "react-router-dom";

const HeaderModalMenu = ({
    checkActive,
    stateHeaderModalMenuAnimation,
    closeModalMenu,
    HeaderModalMenuRef
}) => {
    return (
        <div
            className={`header-modal-menu ${
                stateHeaderModalMenuAnimation ? "close" : ""
            }`}
            ref={HeaderModalMenuRef}
        >
            <div className="header-modal-menu-content">
                <nav className="header-modal-menu-content-nav">
                    <NavLink
                        to="/"
                        className="header-modal-menu-content-nav__link"
                        activeClassName="active"
                        isActive={checkActive}
                        onClick={closeModalMenu}
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to="/events"
                        className="header-modal-menu-content-nav__link"
                        activeClassName="active"
                        onClick={closeModalMenu}
                    >
                        Мероприятия
                    </NavLink>
                    <NavLink
                        to="/magazine"
                        className="header-modal-menu-content-nav__link"
                        activeClassName="active"
                        onClick={closeModalMenu}
                    >
                        Журнал
                    </NavLink>
                    <NavLink
                        to="/contacts"
                        className="header-modal-menu-content-nav__link"
                        activeClassName="active"
                        onClick={closeModalMenu}
                    >
                        Контакты
                    </NavLink>
                    <NavLink
                        to="/personal-data"
                        className="header-modal-menu-content-nav__link"
                        activeClassName="active"
                        onClick={closeModalMenu}
                    >
                        Политика
                    </NavLink>
                </nav>
                <a
                    href="tel:+7 985 508 46 80"
                    className="header-modal-menu-content__phone"
                >
                    +7 985 508 46 80
                </a>
            </div>
        </div>
    );
};

export default HeaderModalMenu;
