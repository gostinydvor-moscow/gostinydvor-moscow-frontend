import React from "react";
import {NavLink, Link} from "react-router-dom";

import {HeaderModalMenu} from "../";

const Header = () => {
    const [stateCookies, setStateCookies] = React.useState(false);
    const [stateHeaderModalMenu, setStateHeaderModalMenu] =
        React.useState(false);

    const [stateHeaderModalMenuAnimation, setStateHeaderModalMenuAnimation] =
        React.useState(false);

    const HeaderModalMenuRef = React.useRef();

    React.useEffect(() => {
        document.body.addEventListener("click", handHeaderModalMenu);
    }, []);

    const setCookiesClick = () => {
        localStorage.setItem("cookie", true);
        setStateCookies(true);
    };

    const checkActive = (match, location) => {
        if (!location) return false;
        const {pathname} = location;

        return pathname === "/";
    };

    const openModalMenu = () => {
        setStateHeaderModalMenu(true);

        document.body.style.overflow = "hidden";
    };

    const closeModalMenu = () => {
        setStateHeaderModalMenuAnimation(true);
        document.body.style.overflow = "visible";

        setTimeout(() => {
            setStateHeaderModalMenu(false);
            setStateHeaderModalMenuAnimation(false);
        }, 390);
    };

    const handHeaderModalMenu = (e) => {
        if (e.target === HeaderModalMenuRef.current) {
            closeModalMenu();
        }
    };

    return (
        <>
            {localStorage.getItem("cookie") || stateCookies ? null : (
                <div className="cookies">
                    <h4 className="cookies__title">Мы используем cookies</h4>

                    <button
                        className="btn-bold cookies__btn"
                        onClick={setCookiesClick}
                    >
                        Окей
                    </button>
                </div>
            )}

            {stateHeaderModalMenu ? (
                <HeaderModalMenu
                    HeaderModalMenuRef={HeaderModalMenuRef}
                    checkActive={checkActive}
                    stateHeaderModalMenuAnimation={
                        stateHeaderModalMenuAnimation
                    }
                    closeModalMenu={closeModalMenu}
                />
            ) : null}

            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <Link to="/" className="header-logo">
                            <img
                                src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/logo.svg`}
                                alt="Гостиный двор Москва"
                                className="header-logo__image"
                            />
                        </Link>
                        <nav className="header-nav">
                            <NavLink
                                to="/"
                                className="header-nav__link"
                                activeClassName="active"
                                isActive={checkActive}
                            >
                                Главная
                            </NavLink>
                            <NavLink
                                to="/events"
                                className="header-nav__link"
                                activeClassName="active"
                            >
                                Мероприятия
                            </NavLink>
                            <NavLink
                                to="/magazine"
                                className="header-nav__link"
                                activeClassName="active"
                            >
                                Журнал
                            </NavLink>
                            <NavLink
                                to="/contacts"
                                className="header-nav__link"
                                activeClassName="active"
                            >
                                Контакты
                            </NavLink>
                        </nav>
                        <div className="header-right">
                            <div className="header-phone">
                                <a
                                    href="tel:+7 985 508 46 80"
                                    className="header-phone__link"
                                >
                                    +7 985 508 46 80
                                </a>
                            </div>

                            <div className="header-social">
                                <a
                                    href="https://t.me/chanel_gdm"
                                    className="header-social__item"
                                >
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12.5 0C5.625 0 0 5.625 0 12.5C0 19.375 5.625 25 12.5 25C19.375 25 25 19.375 25 12.5C25 5.625 19.375 0 12.5 0ZM18.625 7.625L16.5 17.875C16.375 18.625 15.875 18.75 15.375 18.375L12.125 15.875C11.375 16.625 10.625 17.25 10.5 17.5C10.25 17.625 10.125 17.875 9.875 17.875C9.5 17.875 9.5 17.625 9.375 17.375L8.25 13.625L4.875 12.5C4.125 12.25 4.125 11.75 5 11.375L17.75 6.5C18.25 6.375 18.875 6.625 18.625 7.625ZM15.625 8.75L8.5 13.25L9.625 17L9.875 14.5L16 9C16.375 8.625 16.125 8.625 15.625 8.75Z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://www.instagram.com/gostinyi_dvor_moscow"
                                    className="header-social__item"
                                >
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M18.2327 0H6.76727C3.03574 0 0 3.03574 0 6.76727V18.2329C0 21.9642 3.03574 25 6.76727 25H18.2329C21.9642 25 25 21.9642 25 18.2329V6.76727C25 3.03574 21.9642 0 18.2327 0ZM12.5 19.3358C8.7307 19.3358 5.66425 16.2693 5.66425 12.5C5.66425 8.7307 8.7307 5.66425 12.5 5.66425C16.2693 5.66425 19.3358 8.7307 19.3358 12.5C19.3358 16.2693 16.2693 19.3358 12.5 19.3358ZM19.4992 7.27635C18.3853 7.27635 17.4793 6.37036 17.4793 5.25647C17.4793 4.14256 18.3853 3.23639 19.4992 3.23639C20.6132 3.23639 21.5192 4.14256 21.5192 5.25647C21.5192 6.37036 20.6132 7.27635 19.4992 7.27635Z" />
                                        <path d="M12.5012 7.12967C9.54022 7.12967 7.13104 9.53865 7.13104 12.4999C7.13104 15.4607 9.54022 17.87 12.5012 17.87C15.4623 17.87 17.8713 15.4607 17.8713 12.4999C17.8713 9.53865 15.4623 7.12967 12.5012 7.12967Z" />
                                        <path d="M19.4996 4.70222C19.194 4.70222 18.9453 4.95094 18.9453 5.2565C18.9453 5.56206 19.194 5.81078 19.4996 5.81078C19.8053 5.81078 20.054 5.56225 20.054 5.2565C20.054 4.95076 19.8053 4.70222 19.4996 4.70222Z" />
                                    </svg>
                                </a>
                            </div>
                            <div
                                className="header-menu-btn"
                                onClick={openModalMenu}
                            >
                                <svg
                                    width="30"
                                    height="20"
                                    viewBox="0 0 30 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        width="30"
                                        height="2"
                                        rx="1"
                                        fill="black"
                                    />
                                    <rect
                                        y="9"
                                        width="30"
                                        height="2"
                                        rx="1"
                                        fill="black"
                                    />
                                    <rect
                                        y="18"
                                        width="30"
                                        height="2"
                                        rx="1"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
