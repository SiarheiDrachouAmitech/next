import { useCallback, useMemo, useState } from "react";
import { FacilityModel } from "../../models/models";
import Head from "../../node_modules/next/dist/shared/lib/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

export default function Objects(): JSX.Element {
  const facilities: FacilityModel[] = useMemo(() => {
    return [
      {
        id: 1,
        src: "https://yaramark.by/img/courts-8.jpg",
        WEBPsrc: "https://yaramark.by/img/courts-8.webp",
        alt: `Учреждение "Минский объединенный спортивный клуб Федерации профсоюзов Беларуси"`,
        heading: `Учреждение "Минский объединенный спортивный клуб Федерации профсоюзов Беларуси"`,
        linkName: "/objects/minsk-united-sports-club",
      },
      {
        id: 2,
        src: "https://yaramark.by/img/svisloch-9.jpg",
        WEBPsrc: "https://yaramark.by/img/svisloch-9.webp",
        alt: `Открытое акционерное общество «Стройтрест №1»`,
        heading: `Открытое акционерное общество «Стройтрест №1»`,
        linkName: "/objects/stroytrest-1",
      },
      {
        id: 3,
        src: "https://yaramark.by/img/uprooting-10.jpg",
        WEBPsrc: "https://yaramark.by/img/uprooting-10.webp",
        alt: `«Общество с ограниченной ответственностью «Компания по управлению недвижимостью индустриального парка»»`,
        heading: `Общество с ограниченной ответственностью «Компания по управлению недвижимостью индустриального парка»`,
        linkName: "/objects/industrial-park-property-management-company",
      },
      {
        id: 4,
        src: "https://yaramark.by/img/ruxtex-6.jpg",
        WEBPsrc: "https://yaramark.by/img/ruxtex-6.webp",
        alt: `Общество с ограниченной ответственностью «Санвеста»`,
        heading: `Общество с ограниченной ответственностью «Санвеста»`,
        linkName: "/objects/sanvest",
      },
      {
        id: 5,
        src: "https://yaramark.by/img/AZS64-13.jpg",
        WEBPsrc: "https://yaramark.by/img/AZS64-13.webp",
        alt: `Строительство автозаправочной станции №64`,
        heading: `Строительство автозаправочной станции №64`,
        linkName: "/objects/azs-64",
      },
      {
        id: 6,
        src: "https://yaramark.by/img/markup-3.jpg",
        WEBPsrc: "https://yaramark.by/img/markup-3.webp",
        alt: `ООО «Флоренс компани»`,
        heading: `ООО «Флоренс компани»`,
        linkName: "/objects/florence-company",
      },
      {
        id: 7,
        src: "https://yaramark.by/img/minina-1.jpg",
        WEBPsrc: "https://yaramark.by/img/minina-1.webp",
        alt: `РУП «Стройтехнорм»`,
        heading: `РУП «Стройтехнорм»`,
        linkName: "/objects/stroytekhnorm",
      },
      {
        id: 8,
        src: "https://yaramark.by/img/AZS64-13.jpg",
        WEBPsrc: "https://yaramark.by/img/AZS64-13.webp",
        alt: `Реконструкция АЗС № 46`,
        heading: `Реконструкция АЗС № 46`,
        linkName: "/objects/azs-46",
      },
      {
        id: 9,
        src: "https://yaramark.by/img/AZS64-13.jpg",
        WEBPsrc: "https://yaramark.by/img/AZS64-13.webp",
        alt: `Реконструкция АЗС № 80`,
        heading: `Реконструкция АЗС № 80`,
        linkName: "/objects/azs-80",
      },
      {
        id: 10,
        src: "https://yaramark.by/img/vileyka-1.jpg",
        WEBPsrc: "https://yaramark.by/img/vileyka-1.webp",
        alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
        heading: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
        linkName:
          "/objects/parish-of-the-church-of-the-intercession-of-the-most-holy-theotokos",
      },
      {
        id: 11,
        src: "https://yaramark.by/img/shelter-1.jpg",
        WEBPsrc: "https://yaramark.by/img/shelter-1.webp",
        alt: `Государственное учреждение образование  “Социально-педагогический центр Центрального района г. Минска”`,
        heading: `Государственное учреждение образование  “Социально-педагогический центр Центрального района г. Минска”`,
        linkName: "/objects/socio-pedagogical-center",
      },
      {
        id: 12,
        src: "https://yaramark.by/img/shelter-1.jpg",
        WEBPsrc: "https://yaramark.by/img/shelter-1.webp",
        alt: `Государственное учреждение образование  “Социально-педагогический центр Центрального района г. Минска”`,
        heading: `Государственное учреждение образование  “Социально-педагогический центр Центрального района г. Минска”`,
        linkName: "/objects/great-stone",
      },
    ];
  }, []);

  let [isMobile, setIsMobile] = useState(false);

  const getIsMobile = (value: boolean) => {
    setIsMobile(value);
  };

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
        <section className="objects">
          <ul className="objects-list">
            {facilities.map((facility) => {
              return (
                <li className="objects-list__item" key={facility.heading}>
                  <picture>
                    {facility.WEBPsrc && (
                      <source srcSet={facility.WEBPsrc} type="image/webp" />
                    )}
                    <img src={facility.src} alt={facility.alt} />
                  </picture>

                  <a
                    className="objects-list__item__link"
                    href={facility.linkName}
                  >
                    {facility.heading}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
