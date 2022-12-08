import ArrowBack from "../assets/svg/ArrowBack";
import AboutTeams from "../components/AboutDescription/AboutTeams";
import ObjectCarousel from "../components/ObjectCarousel/ObjectCarousel";
import Location from "../assets/svg/Location";
import Link from "../node_modules/next/link";
import { ObjectDescriptionModel } from "../models/models";
import classes from '../components/ObjectCarousel/ObjectCarousel.module.css';

export default function ObjectPage(props: { pageDescription: ObjectDescriptionModel}): JSX.Element {
  const { pageDescription } = props;

  return (
    <section className={classes.objectDescription}>
      <Link href="/objects">
        <a className={classes.objectDescriptionLinkBack}>
          <ArrowBack />
          Назад к проектам
        </a>
      </Link>

      <h3 className={classes.objectDescriptionHeading}>Реконструкция АЗС № 46</h3>

      <ul className={classes.objectDescriptionList}>
        <li className={`${classes.objectDescriptionListItem} ${classes.location}`}>
          <Location />

          <p>{pageDescription.location}</p>
        </li>
        <li className={`${classes.objectDescriptionListItem} ${classes.year}`}>
          <span>Год постройки</span>
          <span>{pageDescription.year}</span>
        </li>
        <li className={`${classes.objectDescriptionListItem} ${classes.sqrt}`}>
          <span>Площадь объекта</span>
          <span>{pageDescription.sqrt} м<sup>2</sup></span>
        </li>
      </ul>

      <div className={classes.objectDescriptionContainer}>
        <ObjectCarousel images={pageDescription.images} />

        <AboutTeams
          array={pageDescription.lists}
          heading={pageDescription.heading}
          headingStyle={pageDescription.headingStyle}
          arrayStyle={pageDescription.arrayStyle}
        />
      </div>
    </section>
  );
}
