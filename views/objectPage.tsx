import ArrowBack from "../assets/svg/ArrowBack";
import AboutTeams from "../components/AboutDescription/AboutTeams";
import ObjectCarousel from "../components/ObjectCarousel/ObjectCarousel";
import Location from "../assets/svg/Location";
import Link from "../node_modules/next/link";
import { ObjectDescriptionModel } from "../models/models";

export default function ObjectPage(props: { pageDescription: ObjectDescriptionModel}): JSX.Element {
  const { pageDescription } = props;

  return (
    <section className="object-description">
      <Link href="/objects">
        <a className="object-description__link-back">
          <ArrowBack />
          Назад к проектам
        </a>
      </Link>

      <h3 className="object-description__heading">Реконструкция АЗС № 46</h3>

      <ul className="object-description-list">
        <li className="object-description-list__item location">
          <Location />

          <p>{pageDescription.location}</p>
        </li>
        <li className="object-description-list__item year">
          <span>Год постройки</span>
          <span>{pageDescription.year}</span>
        </li>
        <li className="object-description-list__item sqrt">
          <span>Площадь объекта</span>
          <span>{pageDescription.sqrt} м<sup>2</sup></span>
        </li>
      </ul>

      <div className="object-description-container">
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
