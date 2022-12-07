import Logo from "../../assets/svg/Logo"
import Menu from "../../assets/svg/Menu"
import CompanyName from "../../assets/svg/CompanyName"
import Link from "../../node_modules/next/link"
import { useState } from "react"

export default function Header(props: {isMobile: boolean, getIsMobile: (value: boolean) => void }): JSX.Element {
    const { isMobile, getIsMobile } = props;

    const headerTopCompanyNameClass = isMobile ?
        'header-top__company-name mobile' :
        'header-top__company-name';

    return (
    <header className="header">
        <section className="header-bg">
            <div className="header-top">
                <p className={headerTopCompanyNameClass}>
                    <span>Строительная компания </span>

                    <CompanyName />
                </p>

                <Link href="/">
                    <Logo />
                </Link>

                <p className="header-top__contacts">
                    <a className="header-top__contacts-link" href="tel:+375445725497">+375 44 572-54-97</a>
                    <a className="header-top__contacts-link" href="mailto:yaramark@mail.ru">yaramark@mail.ru</a>
                </p>
            </div>

            <Menu getIsMobile={getIsMobile} />
        </section>  
    </header>
    )
}