import Number1 from "../../../assets/svg/Number1";
import Number2 from "../../../assets/svg/Number2";
import Number3 from "../../../assets/svg/Number3";
import classes from './Steps.module.css';

export default function Steps(): JSX.Element {

    return (
        <ul className={classes.stepsList}>
        <li className={classes.stepsListItem}>
            <Number1 />

            <div>
                <h3 className={classes.stepsListItemHeading}>Профессиональное оборудование</h3>

                <p className={classes.stepsListItemText}>
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
        <li className={classes.stepsListItem}>
            <Number2 />

            <div>
                <h3 className={classes.stepsListItemHeading}>Опытные мастера</h3>

                <p className={classes.stepsListItemText}>
                    Аттестованные специалисты с
                    опытом работы от 5 лет
                </p>
            </div>
        </li>
        <li className={classes.stepsListItem}>
            <Number3 />

            <div>
                <h3 className={classes.stepsListItemHeading}>О компании в цифрах</h3>

                <p className={classes.stepsListItemText}>
                    3 года на рынке
                    Более 45 выполненных объектов
                    56 сертификатов
                </p>
            </div>
        </li>
    </ul>
    )
}