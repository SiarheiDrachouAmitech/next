import Email from '../../assets/svg/Email';
import Phone from '../../assets/svg/Phone';
import Location from '../../assets/svg/Location';

import Head from '../../node_modules/next/dist/shared/lib/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import { useState, useCallback } from 'react';

export default function Contacts(): JSX.Element {
  let [isMobile, setIsMobile] = useState(false);

  const getIsMobile = (value: boolean) => {
      setIsMobile(value);
  }

  const onCloseMobileMenu = useCallback(() => {
    setIsMobile(false);
}, [setIsMobile]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Header isMobile={isMobile} getIsMobile={getIsMobile} />

  <Navigation isMobile={isMobile} onClose={onCloseMobileMenu} />
        <main className="main">
        <section className="contacts">
        <div className="contacts-descrition">
            <h1 className="contacts-descrition__heading">ООО «ЯраМарк»</h1>

            <ul className="contacts-descrition-list contacts-descrition-list--bg">
                <li className="contacts-descrition-list__item">
                    <Location fill={'#FFCB00'} />

                    <p>223053, Минский район, д. Боровляны, улица Березовая роща, 21</p>
                </li>

                <li className="contacts-descrition-list__item telephones">
                    <Phone fill={'#FFCB00'} />

                    <a className="mobile" href="tel:+375445725497">+375 44 572-54-97</a>
                    <a className="tel" href="tel:+375175120755">+375 17 512-07-55</a>
                </li>

                <li className="contacts-descrition-list__item">
                    <Email fill={'#FFCB00'} />

                    <a href="mailto:yaramark@mail.ru">yaramark@mail.ru</a>
                </li>
            </ul>
        </div>

        <div className="contacts-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.059553079556!2d27.6753051!3d54.001718499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc85c15a3626b%3A0xcb86bd0eb9c4017f!2sUlitsa%20Berozovaya%20Roshcha%2021%2C%20Barauliany%20223053!5e0!3m2!1sen!2sby!4v1659353118768!5m2!1sen!2sby" width="auto" height="700" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
        </main>

<Footer />
    </>
  )
};
