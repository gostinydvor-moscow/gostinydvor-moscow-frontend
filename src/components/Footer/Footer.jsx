import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
    const checkActive = (match, location) => {
        if (!location) return false;
        const {pathname} = location;

        return pathname === "/";
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-block">
                        <div className="footer-logo-wrapper">
                            <Link to="/" className="footer-logo">
                                <img
                                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/logo.svg`}
                                    alt="Гостиный двор Москва"
                                    className="footer-logo__image"
                                />
                            </Link>

                            {/* Hi, we are Nagibin's studio */}
                            <div className="nagibinstudio">
                                <a href="https://nagibinstudio.ru">
                                    <img
                                        src="https://api.nagibinstudio.ru:5000/all/nagibin-develompent-black.svg"
                                        alt=""
                                        className="nagibinstudio__img"
                                        style={{
                                            width: "300px",
                                            userSelect: "none",
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-block">
                        <nav className="footer-nav">
                            <NavLink
                                to="/"
                                className="footer-nav__link"
                                activeClassName="footer-nav__link active"
                                isActive={checkActive}
                            >
                                Главная
                            </NavLink>
                            <NavLink
                                to="/events"
                                className="footer-nav__link"
                                activeClassName="footer-nav__link active"
                            >
                                Мероприятия
                            </NavLink>
                            <NavLink
                                to="/magazine"
                                className="footer-nav__link"
                                activeClassName="footer-nav__link active"
                            >
                                Журнал
                            </NavLink>
                            <NavLink
                                to="/contacts"
                                className="footer-nav__link"
                                activeClassName="footer-nav__link active"
                            >
                                Контакты
                            </NavLink>
                            <NavLink
                                to="/personal-data"
                                className="footer-nav__link"
                                activeClassName="footer-nav__link active"
                            >
                                Политика
                            </NavLink>
                            <a
                                href="tel:+7 985 508 46 80"
                                className="footer-nav__link"
                            >
                                +7 985 508 46 80
                            </a>
                        </nav>
                        <div className="footer-social">
                            <a
                                href="https://t.me/chanel_gdm"
                                className="footer-social__item"
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
                                className="footer-social__item"
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
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
