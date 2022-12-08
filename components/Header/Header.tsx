import Logo from "../../assets/svg/Logo"
import Menu from "../../assets/svg/Menu"
import CompanyName from "../../assets/svg/CompanyName"
import Link from "../../node_modules/next/link"
import classes from './Header.module.css';

export default function Header(props: {isMobile: boolean, getIsMobile: (value: boolean) => void }): JSX.Element {
    const { isMobile, getIsMobile } = props;

    const headerTopCompanyNameClass = isMobile ?
        `${classes.headerTopCompanyName} ${classes.mobile}` :
        classes.headerTopCompanyName;

    return (
    <header className={classes.header}>
        <section className={classes.headerBg}>
            <div className={classes.headerTop}>
                <p className={headerTopCompanyNameClass}>
                    <span>Строительная компания </span>

                    <CompanyName />
                </p>

                <Link href="/">
                    <Logo />
                </Link>

                <p className={classes.headerTopContacts}>
                    <a className={classes.headerTopContactsLink} href="tel:+375445725497">+375 44 572-54-97</a>
                    <a className={classes.headerTopContactsLink} href="mailto:yaramark@mail.ru">yaramark@mail.ru</a>
                </p>
            </div>

            <Menu getIsMobile={getIsMobile} />
        </section>  
    </header>
    )
}