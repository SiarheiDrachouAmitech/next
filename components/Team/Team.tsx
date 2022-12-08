import Link from "../../node_modules/next/link";
import Person from "../../assets/svg/Person";
import { TeamModel } from "../../models/models";
import classes from './Team.module.css';

export default function Team(): JSX.Element {
    const teams: TeamModel[] = [
        {
            id: 1,
            position: `Начальник отдела ПТО`,
            name: `Некрасов Александр Владимирович`,
            tel: `+375(29)138-40-70`,
            person: "male",
        },
        {
            id: 2,
            position: `Главный инженер`,
            name: `Данилевич Олег Олегович`,
            tel: `+375(44)572-54-97`,
            person: "male",
        },
        {
            id: 3,
            position: `Заместитель главного инженера`,
            name: `Иванов Алексей Валерьевич`,
            tel: `+375(44)746-16-37`,
            person: "male",
        },
        {
            id: 4,
            position: `Начальник отдела снабжения`,
            name: `Лешкевич Алексей Андреевич`,
            tel: `+375(29)688-86-19`,
            person: "male",
        },
        {
            id: 5,
            position: `Начальник отдела ПТО`,
            name: `Малова Елена Валерьевна`,
            tel: `+375(29)844-79-81`,
            person: "female",
        },
        {
            id: 6,
            position: `Главный бухгалтер и начальник отдела кадров`,
            name: `Челядинская Екатерина Александровна`,
            tel: `+375(29)101-56-04`,
            person: "female",
        },
        {
            id: 6,
            position: `Инженер по охране труда`,
            name: `Малков Александр Михайлович`,
            tel: `+375(29)174-98-24`,
            person: "male",
        },
        {
            id: 7,
            position: `Производитель работ`,
            name: `Буйневич Сергей Иванович`,
            tel: null,
            person: "male",
        },
        {
            id: 8,
            position: `Производитель работ`,
            name: `Грицкевич Андрей Петрович`,
            tel: null,
            person: "male",
        },
    ];

    return (
    <section className={classes.team}>
        <h2 className={classes.teamHeading}>
            Наша команда
        </h2>

        <ul className={classes.teamList}>
            {teams.map((team) => {
                return (
                    <li className={`${classes.teamListItem} ${classes.teamListItem}`} key={team.name}>
                        <Person person={team.person} />
                        <p className={classes.teamListItemHeading}>{team.name}</p>

                        {team.tel && <Link className={classes.teamListItemLink} href={'tel:' + team.tel}>{team.tel}</Link>}
                        
                        <p className={classes.teamListItemText}>{team.position}</p>
                    </li>
                )
            })}
            
        </ul>
    </section>
    )
}