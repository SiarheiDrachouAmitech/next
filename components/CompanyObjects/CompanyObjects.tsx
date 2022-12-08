import Link from "../../node_modules/next/link";
import { CompanyObjectModel } from "../../models/models";
import classes from './CompanyObjects.module.css';

export default function CompanyObjects(props: any): JSX.Element {
  const companyObjects: CompanyObjectModel[] = [
    {
      id: 1,
      heading: `
        Государственное учреждение образование  “Социально-педагогический центр Центрального района г. Минска
      `,
      src: "https://yaramark.by/img/shelter-1.jpg",
      WEBPsrc: "https://yaramark.by/img/shelter-1.webp",
      alt: `Государственное учреждение образование  “Социально-педагогический центр Центрального района г. Минска`,
      link: "/objects/socio-pedagogical-center",
    },
    {
      id: 2,
      heading: `
				«Минский объединенный спортивный клуб федерации профсоюзов»
			`,
      src: "https://yaramark.by/img/courts-8.jpg",
      WEBPsrc: "https://yaramark.by/img/courts-8.webp",
      alt: `«Минский объединенный спортивный клуб федерации профсоюзов»`,
      link: "/objects/minsk-united-sports-club",
    },
    {
      id: 3,
      heading: `
				«Общество с ограниченной ответственностью «Компания по управлению недвижимостью индустриального парка»»
			`,
      src: "https://yaramark.by/img/uprooting-10.jpg",
      WEBPsrc: "https://yaramark.by/img/uprooting-10.webp",
      alt: `«Общество с ограниченной ответственностью «Компания по управлению недвижимостью индустриального парка»»`,
      link: "/objects/industrial-park-property-management-company",
    },
  ];

  return (
    <section className={classes.companyObjects}>
      <h2 className={classes.companyObjectsHeading}>Объекты</h2>

      <ul className={classes.companyObjectsList}>
        {companyObjects.map((companyObject) => {
          return (
            <li
              className={classes.companyObjectsListItem}
              key={companyObject.heading}
            >
              <picture>
                {companyObject.WEBPsrc && (
                  <source srcSet={companyObject.WEBPsrc} type="image/webp" />
                )}
                <img src={companyObject.src} alt={companyObject.alt} />
              </picture>
              <Link href={companyObject.link}>
                <a className={classes.companyObjectsListItemLink}>
                  {companyObject.heading}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>

      <Link href="/objects">
        <a className={`${classes.companyObjectsLink} button--secondary`}>
          Просмотреть все
        </a>
      </Link>
    </section>
  );
}
