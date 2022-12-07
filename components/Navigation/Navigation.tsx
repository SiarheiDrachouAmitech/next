import { useCallback, useMemo, useState } from 'react';
import Close from '../../assets/svg/Close';
import SubmenuIcon from '../../assets/svg/SubmenuIcon'
import Link from '../../node_modules/next/link';

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
            'header-navigation header-navigation--mobile' :
            'header-navigation';
    }, [isMobile]);
    const headerNavigationListClass = useMemo(() => {
        return isMobile ?
            'header-navigation__list header-navigation__list--active' :
            'header-navigation__list';
    }, [isMobile]);
    const headerNavigationListItemLinkClass = useMemo(() => {
        return isSubMenu ?
            'header-navigation__list-item__link header-navigation__list-item__link--active' :
            'header-navigation__list-item__link';
    }, [isSubMenu]);
    const headerNavigationSubmenu = useMemo(() => {
        return isSubMenu ?
            'header-navigation-submenu header-navigation-submenu--mobile' :
            'header-navigation-submenu';
    }, [isSubMenu]);

    return (
        <nav className={headerNavigationClass}>
        {isMobile && <Close fill={isSubMenu ? 'black' : '#ffcb00'} onClose={onClose} /> }
        <ul className={headerNavigationListClass}>
            <li className="header-navigation__list-item home-link">
                <Link className="header-navigation__list-item__link" href="/">Главная</Link>
            </li>
            <li className="header-navigation__list-item header-submenu" onClick={visibleSubMenu}>
                <span className={headerNavigationListItemLinkClass}>
                    Наши услуги

                    <SubmenuIcon stroke={'#ffcb00'} />
                </span>

                <div className={headerNavigationSubmenu}>
                    <ul className="header-navigation-submenu-list">
                        <li className="header-navigation-submenu-list__item">
                            Генподряд
                        </li>
                        <li className="header-navigation-submenu-list__item">
                            Подрядчик по земляным работам
                        </li>
                        <li className="header-navigation-submenu-list__item">
                            Благоустройство
                        </li>
                        <li className="header-navigation-submenu-list__item">
                            Инженерные сети
                        </li>
                        <li className="header-navigation-submenu-list__item">
                            Подрядчик по укладке асфальта
                        </li>
                        <li className="header-navigation-submenu-list__item">
                            Ландшафтный подрядчик
                        </li>
                    </ul>
                </div>
            </li>
            <li className="header-navigation__list-item">
                <a className="header-navigation__list-item__link" href="/equipment_rental">Аренда техники</a>
            </li>
            <li className="header-navigation__list-item">
                <a className="header-navigation__list-item__link" href="/objects">Объекты</a>
            </li>
            <li className="header-navigation__list-item">
                <a className="header-navigation__list-item__link" href="/technical_competence">Техкомпетенция</a>
            </li>
            <li className="header-navigation__list-item">
                <a className="header-navigation__list-item__link" href="/about_us">О нас</a>
            </li>
            <li className="header-navigation__list-item">
                <a className="header-navigation__list-item__link" href="/contacts">Контакты</a>
            </li>
        </ul>
    </nav>
    )
}