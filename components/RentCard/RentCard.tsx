import { TechnicalCardModel } from "../../models/models";

export default function RentCard(props: {getIsOpenRequest: (value: boolean) => void, card: TechnicalCardModel}): JSX.Element {
   const { card, getIsOpenRequest } = props;

   return (
    <li className="rent-card-list__item">
        <figure>
            <img src={card.src} alt={card.alt} />

            <figcaption v-text="card.name"></figcaption>
        </figure>

        <div className="card-container">
            {card.type && <p className="card-type">{card.type}</p>}

            {card.ladle && <p className="card-description">
                <span>Ковш</span>
                <span>{card.ladle}</span>
            </p>}

            {card.weight && <p className="card-description">
                <span>Масса</span>
                <span>{card.weight}</span>
            </p>}

            {card.swampCaterpillar && <p className="card-description">
                <span>Болотная гусеница</span>
                <span>{card.swampCaterpillar}</span>
            </p>}

            {card.trackWidth && <p className="card-description">
                <span>Ширина трака</span>
                <span>{card.trackWidth}</span>
            </p>}

            {card.bladeWidth && <p className="card-description">
                <span>Ширина отвала</span>
                <span>{card.bladeWidth}</span>
            </p>}
            {card.diggingDepth && <p className="card-description">
                <span>Глубина копания</span>
                <span>{card.diggingDepth}</span>
            </p>}
            {card.count && <p className="card-description">
                <span>Количество</span>
                <span>{card.count}</span>
            </p>}
        </div>

        <button className="button--secondary" onClick={() => getIsOpenRequest(true)}>Заказать</button>
    </li>
    )
}