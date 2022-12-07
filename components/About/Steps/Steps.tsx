import Number1 from "../../../assets/svg/Number1";
import Number2 from "../../../assets/svg/Number2";
import Number3 from "../../../assets/svg/Number3";

export default function Steps(): JSX.Element {

    return (
        <ul className="steps-list">
        <li className="steps-list__item">
            <Number1 />

            <div>
                <h3 className="steps-list__item__heading">Профессиональное оборудование</h3>

                <p className="steps-list__item__text">
                    В работе используем
                    <br />
                    собственные механизмы
                    <br />
                    ведущих произодителей
                    <span>
                        (Komatsu, Caterpillar, Case, Hitachi,
                        <br />
                        Bomag, SDLG, HYUNDAI, МАЗ, КАМАЗ,
                        <br />
                        AMKODOR, BOBCAT комплекс малой механизаций)
                    </span>
                </p>
            </div>
        </li>
        <li className="steps-list__item">
            <Number2 />

            <div>
                <h3 className="steps-list__item__heading">Опытные мастера</h3>

                <p className="steps-list__item__text">
                    Аттестованные специалисты с
                    опытом работы от 5 лет
                </p>
            </div>
        </li>
        <li className="steps-list__item">
            <Number3 />

            <div>
                <h3 className="steps-list__item__heading">О компании в цифрах</h3>

                <p className="steps-list__item__text">
                    3 года на рынке
                    Более 45 выполненных объектов
                    56 сертификатов
                </p>
            </div>
        </li>
    </ul>
    )
}