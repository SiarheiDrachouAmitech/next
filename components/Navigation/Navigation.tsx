import { useCallback, useMemo, useState } from 'react';
import Close from '../../assets/svg/Close';
import SubmenuIcon from '../../assets/svg/SubmenuIcon'
import Link from '../../node_modules/next/link';
import classes from './Navigation.module.css';

export default function Navigation(props: {isMobile: boolean, onClose: () => void }): JSX.Element {
    const { isMobile, onClose} = props;
    
    let [isSubMenu, setIsSubMenu] = useState(false);

    const visibleSubMenu = useCallback(() => {        
        if(window.innerWidth < 1340) {
            setIsSubMenu(true);

            return ;
        }
        
        setIsSubMenu(false);
        onClose();
    }, [onClose])
    
    
    const headerNavigationClass = useMemo(() => {
        return isMobile ?
            `${classes.headerNavigation} ${classes.headerNavigationMobile}` :
            classes.headerNavigation;
    }, [isMobile]);
    const headerNavigationListClass = useMemo(() => {
        return isMobile ?
            `${classes.headerNavigationList} ${classes.headerNavigationListActive}` :
            classes.headerNavigationList;
    }, [isMobile]);
    const headerNavigationListItemLinkClass = useMemo(() => {
        return isSubMenu ?
            `${classes.headerNavigationListItemLink} ${classes.headerNavigationListItemLinkActive}` :
            classes.headerNavigationListItemLink;
    }, [isSubMenu]);
    const headerNavigationSubmenuClass = useMemo(() => {
        return isSubMenu ?
            `${classes.headerNavigationSubmenu} ${classes.headerNavigationSubmenuMobile}` :
            classes.headerNavigationSubmenu;
    }, [isSubMenu]);

    return (
        <nav className={headerNavigationClass}>
        {isMobile && <Close fill={isSubMenu ? 'black' : '#ffcb00'} onClose={onClose} /> }
        <ul className={headerNavigationListClass}>
            <li className={`${classes.headerNavigationListItem} ${classes.homeLink}`}>
                <Link className={classes.headerNavigationListItemLink} href="/">Главная</Link>
            </li>
            <li className={`${classes.headerNavigationListItem} ${classes.headerSubmenu}`} onClick={visibleSubMenu}>
                <span className={headerNavigationListItemLinkClass}>
                    Наши услуги

                    <SubmenuIcon stroke={'#ffcb00'} />
                </span>

                <div className={headerNavigationSubmenuClass}>
                    <ul className={classes.headerNavigationSubmenuList}>
                        <li className={classes.headerNavigationSubmenuListItem}>
                            Генподряд
                        </li>
                        <li className={classes.headerNavigationSubmenuListItem}>
                            Подрядчик по земляным работам
                        </li>
                        <li className={classes.headerNavigationSubmenuListItem}>
                            Благоустройство
                        </li>
                        <li className={classes.headerNavigationSubmenuListItem}>
                            Инженерные сети
                        </li>
                        <li className={classes.headerNavigationSubmenuListItem}>
                            Подрядчик по укладке асфальта
                        </li>
                        <li className={classes.headerNavigationSubmenuListItem}>
                            Ландшафтный подрядчик
                        </li>
                    </ul>
                </div>
            </li>
            <li className={classes.headerNavigationListItem}>
                <a className={classes.headerNavigationListItemLink} href="/equipment_rental">Аренда техники</a>
            </li>
            <li className={classes.headerNavigationListItem}>
                <a className={classes.headerNavigationListItemLink} href="/objects">Объекты</a>
            </li>
            <li className={classes.headerNavigationListItem}>
                <a className={classes.headerNavigationListItemLink} href="/technical_competence">Техкомпетенция</a>
            </li>
            <li className={classes.headerNavigationListItem}>
                <a className={classes.headerNavigationListItemLink} href="/about_us">О нас</a>
            </li>
            <li className={classes.headerNavigationListItem}>
                <a className={classes.headerNavigationListItemLink} href="/contacts">Контакты</a>
            </li>
        </ul>
    </nav>
    )
}