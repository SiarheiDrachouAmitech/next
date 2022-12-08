import Close from "../../assets/svg/Close";
import PhoneLogo from "../../assets/svg/PhoneLogo";
import WhatsappLogo from "../../assets/svg/WhatsappLogo";
import ViberLogo from "../../assets/svg/ViberLogo";
import TelegramLogo from "../../assets/svg/TelegramLogo";
import { useCallback, useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import classes from './RequestModal.module.css';

declare global {
    interface Window { opera: any; }
};

export default function RequestModal(props: {onClose: Function}): JSX.Element {
    const { onClose } = props;

    const [viberLink, setViberLink] = useState('');

    const checkDevice = useCallback(() => {
        let MobileUserAgent = navigator.userAgent || navigator.vendor || window.opera;

        let isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(MobileUserAgent.toLowerCase());
        
        if (MobileUserAgent.match(/iPhone/i) || MobileUserAgent.match(/iPod/i) && !isTablet) {
           return 'iOS';
        } else if (MobileUserAgent.match(/Android/i) && !isTablet) {
            return 'Android';
        } else {
            return 'Desktop';
        }
    }, []);

    useEffect(() => {
        setViberLink(checkDevice() === 'iOS' || checkDevice() === 'Android' ? 'https://msng.link/o/?375296888619=vi' : 'viber://chat?number=%2B375296888619')
    }, [checkDevice])
    

    return (
    <section className={classes.requestModal} onClick={() => onClose}>
        <div className={classes.requestModalContainer}>
            <Close onClose={() => onClose}/>
            
            <h3 className={classes.requestModalContainerHeading}>Аренда техники</h3>

            <p className={classes.requestModalContainerText}>
                Связаться с главным механиком <strong>Алексеем</strong> вы можете по номеру телефона:  <a href="tel:+375296888619">+375(29)688-86-19</a> 
            </p>

            <span className={`${classes.requestModalContainerText} ${classes.span}`}>или через</span>

            <Link href="tel:375296888619" className={`${classes.requestModalContainerButton} ${classes.phone}`}>
                <PhoneLogo />

                Перейти в WhatsApp 
            </Link>

            <Link href="https://wa.me/375296888619" className={`${classes.requestModalContainerButton} ${classes.watsapp}`}>
                <WhatsappLogo />

                Перейти в WhatsApp 
            </Link>
            <Link href={viberLink} className={`${classes.requestModalContainerButton} ${classes.viber}`}>
                <ViberLogo />

                Перейти в Viber
            </Link>
            <Link href="https://telegram.im/375296888619" className={`${classes.requestModalContainerButton} ${classes.telegramm}`}>
                <TelegramLogo />

                Перейти в Телеграм
            </Link>
        </div>
    </section>
    )
}