import { TechnicalCardModel } from "../../models/models";
import classes from './RentCard.module.css';

export default function RentCard(props: {getIsOpenRequest: (value: boolean) => void, card: TechnicalCardModel}): JSX.Element {
   const { card, getIsOpenRequest } = props;

   return (
    <li className={classes.rentCardListItem}>
        <figure>
            <img src={card.src} alt={card.alt} />

            <figcaption>{card.name}</figcaption>
        </figure>

        <div className={classes.cardContainer}>
            {card.type && <p className={classes.cardType}>{card.type}</p>}

            {card.ladle && <p className={classes.cardDescription}>
                <span>Ковш</span>
                <span>{card.ladle}</span>
            </p>}

            {card.weight && <p className={classes.cardDescription}>
                <span>Масса</span>
                <span>{card.weight}</span>
            </p>}

            {card.swampCaterpillar && <p className={classes.cardDescription}>
                <span>Болотная гусеница</span>
                <span>{card.swampCaterpillar}</span>
            </p>}

            {card.trackWidth && <p className={classes.cardDescription}>
                <span>Ширина трака</span>
                <span>{card.trackWidth}</span>
            </p>}

            {card.bladeWidth && <p className={classes.cardDescription}>
                <span>Ширина отвала</span>
                <span>{card.bladeWidth}</span>
            </p>}
            {card.diggingDepth && <p className={classes.cardDescription}>
                <span>Глубина копания</span>
                <span>{card.diggingDepth}</span>
            </p>}
            {card.count && <p className={classes.cardDescription}>
                <span>Количество</span>
                <span>{card.count}</span>
            </p>}
        </div>

        <button className="button--secondary" onClick={() => getIsOpenRequest(true)}>Заказать</button>
    </li>
    )
}